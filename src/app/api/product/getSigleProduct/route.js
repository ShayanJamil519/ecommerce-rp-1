// import { connectDb } from "../../../../../DBConfig/connectDB";
// import Product from "../../../../models/productModel";
// import { NextResponse } from "next/server";

// export async function GET(request, { params }) {
//   try {
//     console.log("hello");

//     const id = params;
//     console.log("id: ", id);
//     const product = await Product.findById(id);
//     if (!product) {
//       return NextResponse.json({
//         error: "No product found with this given id",
//       });
//     } else {
//       return response;
//     }
//   } catch (error) {
//     return NextResponse.json({ error: error.message });
//   }
// }
// connectDb();
