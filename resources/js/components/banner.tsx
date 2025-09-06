// const ProductItem = ({ product }) => {
//   return (
//     <div className="group relative flex-1 transition-all duration-500 ease-in-out hover:flex-[3] overflow-hidden">
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-110"
//         style={{ backgroundImage: `url(${product.image})` }}
//       />
//       <div className="absolute inset-0 w-full h-full bg-black opacity-40 transition-opacity duration-500 ease-in-out group-hover:opacity-20" />
//       <div className="relative h-full w-full p-6 flex flex-col justify-end z-10">
//         <h2 className="text-lg font-bold transition-all duration-500 ease-in-out group-hover:text-2xl text-white">
//           {product.name}
//         </h2>
//       </div>
//     </div>
//   );
// };

// const Banner = ({ products }) => {
//   return (
//     <div className=" left-0 right-0 top-0 w-screen">
//       <div className="flex h-[400px] w-full overflow-hidden">
//         {products.map((product) => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;

const ProductItem = ({ product }) => {
  return (
    <div
      className="group relative transition-all duration-500 ease-in-out overflow-hidden
                    h-[200px] md:h-full
                    flex-none md:flex-1 w-full md:w-auto
                    md:hover:flex-[3]"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out
                   group-hover:scale-110"
        style={{ backgroundImage: `url(${product.image})` }}
      />
      <div
        className="absolute inset-0 w-full h-full bg-black opacity-40 transition-opacity duration-500
                      ease-in-out group-hover:opacity-20"
      />
      <div className="relative h-full w-full p-4 md:p-6 flex flex-col justify-end z-10">
        <h2
          className="text-lg md:text-xl lg:text-2xl font-bold transition-all duration-500 ease-in-out
                     group-hover:text-xl md:group-hover:text-2xl lg:group-hover:text-3xl text-white"
        >
          {product.name}
        </h2>
      </div>
    </div>
  );
};

const Banner = ({ products }) => {
  return (
    <div className="w-full">
      <div
        className="flex flex-col md:flex-row
                      h-auto md:h-[400px] lg:h-[500px]
                      w-full overflow-hidden"
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
