"use server";

export async function placeOrder(formData) {
  const name = formData.get("name");
  const phone = formData.get("phone");
  const address = formData.get("address");

  if (!name || name.trim().length < 2) {
    return {
      success: false,
      message: "Please enter a valid name.",
    };
  }

  if (!phone || phone.trim().length < 9) {
    return {
      success: false,
      message: "Please enter a valid phone number.",
    };
  }

  if (!address || address.trim().length < 5) {
    return {
      success: false,
      message: "Please enter a valid delivery address.",
    };
  }

  console.log("New Order:", {
    name,
    phone,
    address,
  });

  return {
    success: true,
    message: "Your order has been placed successfully!",
  };
}
