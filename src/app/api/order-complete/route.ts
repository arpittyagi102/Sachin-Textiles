import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();

    // Convert JSON to URL-encoded form string
    const formBody = new URLSearchParams();
    for (const key in json) {
      if (Object.prototype.hasOwnProperty.call(json, key)) {
        if(typeof json[key] === 'object') {
            // If the value is an object, convert it to a string
            formBody.append(key, `Product Name = "${json[key].Product_Name}", Price = "${json[key].Price_Value}", Quantity = "${json[key].quantity}"${json[key].Color && `, Color Selected = ` + json[key].Color.split(",")[json[key].colorIndexSelected]}`);
        } else {
            formBody.append(key, json[key]);
        }
      }
    }

    const formBoldResponse = await fetch("https://formbold.com/s/3Lqkk", {            // prod
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody.toString(),
    });

    const resultText = await formBoldResponse.text();

    return NextResponse.json({ message: "Form submitted", result: resultText });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json({ error: "Form submission failed" }, { status: 500 });
  }
}
