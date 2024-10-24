import { useState } from "react";
import { IDiscount, IProduct } from "../../types.ts";
import { addProductId, addProductItem, editProductInfo, findProduct, removeDiscount, updateProductInfo } from "./utils/productUtils.ts";
import { useProductStore } from "../store/store.ts";

export const useProducts = () => {
  const {products, setProducts} = useProductStore();
  const [openProductIds, setOpenProductIds] = useState<Set<string>>(new Set());
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);
  const [newDiscount, setNewDiscount] = useState<IDiscount>({
    quantity: 0,
    rate: 0
  });
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<IProduct, "id">>({
    name: "",
    price: 0,
    stock: 0,
    discounts: []
  });

  const updateProduct = (updatedProduct: IProduct) => {
    setProducts((prevProducts) =>
      updateProductInfo(prevProducts, updatedProduct)
    );
  };

  const addProduct = (newProduct: IProduct) => {
    setProducts((prevProducts) => addProductItem(prevProducts, newProduct));
  };

  const toggleProductAccordion = (productId: string) => {
    setOpenProductIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  // handleEditProduct 함수 수정
  const handleEditProduct = (product: IProduct) => {
    setEditingProduct({ ...product });
  };

  // 새로운 핸들러 함수 추가
  const handleProductNameUpdate = (productId: string, newName: string) => {
    if (editingProduct && editingProduct.id === productId) {
      const updatedProduct = { ...editingProduct, name: newName };
      setEditingProduct(updatedProduct);
    }
  };

  // 새로운 핸들러 함수 추가
  const handlePriceUpdate = (productId: string, newPrice: number) => {
    if (editingProduct && editingProduct.id === productId) {
      const updatedProduct = editProductInfo(editingProduct, { price: newPrice });
      setEditingProduct(updatedProduct);
    }
  };

  // 수정 완료 핸들러 함수 추가
  const handleEditComplete = () => {
    if (editingProduct) {
      updateProduct(editingProduct);
      setEditingProduct(null);
    }
  };

  const handleStockUpdate = (productId: string, newStock: number) => {
    const updatedProduct = findProduct(products, productId);
    if (updatedProduct) {
      const newProduct = editProductInfo(updatedProduct, { stock: newStock });
      updateProduct(newProduct);
      setEditingProduct(newProduct);
    }
  };

  const handleAddDiscount = (productId: string) => {
    const updatedProduct = findProduct(products, productId);
    if (updatedProduct && editingProduct) {
      const newProduct = editProductInfo(updatedProduct, { 
        discounts: [...updatedProduct.discounts, newDiscount] 
      });
      updateProduct(newProduct);
      setEditingProduct(newProduct);
      setNewDiscount({ quantity: 0, rate: 0 });
    }
  };

  const handleRemoveDiscount = (productId: string, index: number) => {
    const updatedProduct = findProduct(products, productId);
    if (updatedProduct) {
      const newProduct = editProductInfo(updatedProduct, { 
        discounts: removeDiscount(updatedProduct.discounts, index)
      });
      updateProduct(newProduct);
      setEditingProduct(newProduct);
    }
  };

  const handleAddNewProduct = () => {
    const newProductId = Date.now().toString();
    const productWithId = addProductId(newProduct, newProductId);
    addProduct(productWithId);
    setNewProduct({
      name: "",
      price: 0,
      stock: 0,
      discounts: []
    });
    setShowNewProductForm(false);
  };

  return {
    products,
    addProduct,
    updateProduct,
    showNewProductForm,
    setShowNewProductForm,
    newProduct,
    setNewProduct,
    handleAddNewProduct,
    openProductIds,
    editingProduct,
    toggleProductAccordion,
    handleProductNameUpdate,
    handlePriceUpdate,
    handleStockUpdate,
    handleRemoveDiscount,
    newDiscount,
    setNewDiscount,
    handleAddDiscount,
    handleEditComplete,
    handleEditProduct
  };
};
