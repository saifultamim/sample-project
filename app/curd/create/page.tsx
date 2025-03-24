"use client";

import productCreate from "./server-action";

const ProductForm = ({ addButton = true }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    const response = await productCreate(formObject);
    console.log("frontEnd ", response);
  };

  return (
    <section className="rounded-md bg-white text-black w-full">
      <form onSubmit={handleSubmit} className="w-6/12 mx-auto pt-6">
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium ">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>

        <div>
          <label htmlFor="brand" className="block mb-1 text-sm font-medium ">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type brand name"
            // required
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1 text-sm font-medium ">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div>
          <label htmlFor="policy" className="block mb-1 text-sm font-medium ">
            Return Policy
          </label>
          <input
            type="text"
            name="policy"
            id="policy"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div>
          <label htmlFor="color" className="block mb-1 text-sm font-medium ">
            color
          </label>
          <input
            type="text"
            name="color"
            id="color"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 text-sm font-medium ">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div>
          <label htmlFor="weight" className="block mb-1 text-sm font-medium ">
            Item Weight
          </label>
          <input
            type="text"
            name="weight"
            id="weight"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div>
          <label htmlFor="state" className="block mb-1 text-sm font-medium ">
            product state
          </label>
          <input
            type="text"
            name="state"
            id="state"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div>
          <label
            htmlFor="available"
            className="block mb-1 text-sm font-medium "
          >
            Available
          </label>
          <input
            type="text"
            name="available"
            id="available"
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
            placeholder="Type product name"
            // required
          />
        </div>
        <div className="w-full mt-3">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium "
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg w-full  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300"
            placeholder="Meta tag description"
          ></textarea>
        </div>
        <input
          type="submit"
          name="submit"
          id="submit"
          className="px-4 py-2 bg-[#f3f5f5]/20 rounded-lg  text-black outline-none focus:ring-2 focus:border-transparent focus:outline-none border border-gray-300 "
          value="Submit"
        />
      </form>
    </section>
  );
};

export default ProductForm;
