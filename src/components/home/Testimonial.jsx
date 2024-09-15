import avatar from "../../assets/avatar.jpg";
const Testimonial = () => {
  return (
    // <div className="container mt-5 mb-5">
    //   <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
    //       <div className="card p-3 text-center px-4">
    //         <div className="user-image flex justify-center items-center mb-3">
    //           <img
    //             src={avatar}
    //             className="rounded-circle"
    //             width="80"
    //           />
    //         </div>

    //         <div className="user-content">
    //           <h5 className="mb-0">Bruce Hardy</h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat.
    //           </p>
    //         </div>

    //         <div className="ratings">
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //         </div>
    //       </div>

    //       <div className="card p-3 text-center px-4">
    //         <div className="user-image flex justify-center items-center mb-3">
    //           <img
    //             src="https://i.imgur.com/w2CKRB9.jpg"
    //             className="rounded-circle"
    //             width="80"
    //           />
    //         </div>

    //         <div className="user-content">
    //           <h5 className="mb-0">Mark Smith</h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat.
    //           </p>
    //         </div>

    //         <div className="ratings">
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //         </div>
    //       </div>

    //       <div className="card p-3 text-center px-4">
    //         <div className="user-image flex justify-center items-center mb-3">
    //           <img
    //             src="https://i.imgur.com/ACeArwY.jpg"
    //             className="rounded-circle"
    //             width="80"
    //           />
    //         </div>

    //         <div className="user-content">
    //           <h5 className="mb-0">Veera Duncan</h5>
    //           <p>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    //             enim ad minim veniam, quis nostrud exercitation ullamco laboris
    //             nisi ut aliquip ex ea commodo consequat.
    //           </p>
    //         </div>

    //         <div className="ratings">
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //           <i className="fa fa-star"></i>
    //         </div>
    //       </div>
    //   </div>
    // </div>
    <>
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-bold sm:mb-5 mb-3 text-gray-600">
                Biz haqimizda mijozlarimizning fikri
              </h1>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        Kenzie Edgar.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos sunt ratione dolor exercitationem minima quas itaque
                      saepe quasi architecto vel! Accusantium, vero sint
                      recusandae cum tempora nemo commodi soluta deleniti.
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=2" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        Stevie Tifft.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                      Dolore quod necessitatibus, labore sapiente, est,
                      dignissimos ullam error ipsam sint quam tempora vel.
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=3" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        Tommie Ewart.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vitae, obcaecati ullam excepturi dicta error deleniti
                      sequi.
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=4" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        Charlie Howse.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto inventore voluptatum nostrum atque, corrupti,
                      vitae esse id accusamus dignissimos neque reprehenderit
                      natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                      iusto.
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=5" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        Nevada Herbertson.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                      ipsum, laboriosam nostrum facere exercitationem pariatur
                      deserunt tempora molestiae assumenda nesciunt alias eius?
                      Illo, autem!
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="testimonial w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="https://i.pravatar.cc/100?img=6" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-base uppercase text-gray-600">
                        Kris Stanton.
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-base leading-tight">
                      <span className="text-xl leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem iusto, explicabo, cupiditate quas totam!
                      <span className="text-xl leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div> */}
    </>
  );
};

export default Testimonial;
