import HeroCarousel from "../components/home/HeroCarousel";
import Location from "../components/home/Location";
import Testimonial from "../components/home/Testimonial";
import group from "../assets/group.jpg";
import problem from "../assets/problem.avif";
const Home = () => {
  return (
    <>
      <main>
        <HeroCarousel />
        <section className="pt-20 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-bold sm:mb-5 mb-3 text-gray-600">
                Bizning sizga taklif qiladigan xizmatlarimiz
              </h1>
              <div className="text-center mb-4 sm:mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-red-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-red-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-red-500 ml-1"></span>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="sm:pt-16 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 pt-5 py-3 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-4 shadow-lg rounded-full bg-red-400">
                      <i className="fa-regular fa-clock text-2xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Biz 24/7 ishlaymiz
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Bizning xizmat ko'rsatish markazimiz sizning
                      qo'ng'iroqlaringizni kechayu kunduz qabul qilishga tayyor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 pt-5 py-3 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-4 shadow-lg rounded-full bg-blue-400">
                      <i className="fa-solid fa-list-check text-2xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Diagnostika</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Mutaxassislar qozonning noto'g'ri ishlashining manbasini
                      tezda aniqlaydilar
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:pt-8 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 pt-5 py-3 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-4 shadow-lg rounded-full bg-green-400">
                      <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Ta'mirlash</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      Mijozlar uchun arzon narxda mukammal ta'mirlash xizmati
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center sm:mt-24 mt-8 pb-10">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Bizning kompaniyamiz bozorda 12 yildan ortiq vaqtdan beri
                  mavjud
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  Avvalo, sanoatda ko'p yillar davomida to'plangan tajriba va
                  bilimimiz bizni bozorda boshqalardan ajratib turadi.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Bizning xodimlarimiz eng yuqori darajadagi haqiqiy
                  professionallar, ularning har biri o'z sohasining mutaxassisi.
                  Mutaxassislarimiz innovatsion yechimlarni yaratishga qodir
                  ekanliklari va doimo takomillashayotganidan faxrlanamiz.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <img
                    alt="..."
                    src={group}
                    // https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px",
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-pink-600 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Bizning maqsad
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Bizning kompaniyamiz doimo mijozlarimizning ehtiyojlari va
                      umidlariga e'tibor qaratadi. Bizning muvaffaqiyatimiz
                      ularning qoniqishiga bog'liqligini aniq tushunamiz.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative sm:py-20 py-0">
          <div
            className="bottom-auto pointer-events-none overflow-hidden"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap gap-5">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={problem}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto pb-10">
                <div>
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <i className="fa-solid fa-circle-exclamation text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">
                    Qozonxonalar bilan bog'liq eng keng tarqalgan xatolar
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Biz quyidagi keng tarqalgan xatolarni muammosiz tuzatamiz
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex justify-center items-center text-xs rounded-full text-pink-600 bg-pink-200">
                          <i className="fa-solid fa-triangle-exclamation text-base"></i>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            sovutish suvi bosimining yetarli emasligi
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex justify-center items-center text-xs rounded-full text-pink-600 bg-pink-200">
                          <i className="fa-solid fa-triangle-exclamation text-base"></i>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                          ateşleme bilan bog'liq muammolar
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 flex justify-center items-center text-xs rounded-full text-pink-600 bg-pink-200">
                          <i className="fa-solid fa-triangle-exclamation text-base"></i>
                        </div>
                        <div>
                          <h4 className="text-gray-600">isitish harorati sensori shikastlanishi</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="mt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our heroes</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gazproservice.uz/img/Instagram/1.jpeg"
                    // src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Web Developer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gazproservice.uz/img/Instagram/1.jpeg"
                    // src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gazproservice.uz/img/Instagram/1.jpeg"
                    // src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      UI/UX Designer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://gazproservice.uz/img/Instagram/1.jpeg"
                    // src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: "120px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <Testimonial />
        <Location />
        <section className="relative block bg-gray-900">
          <div
            className="bottom-auto pointer-events-none overflow-hidden"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-10 lg:pb-64 pb-40">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                Biz sizga quyidagilarni taklif qilamiz!
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Biz yuqori sifatli mahsulot va xizmatlarni taqdim etamiz, mijozlar so'rovlariga tez va moslashuvchan javob beramiz va individual yondashuvni ta'minlaymiz. Eng so'nggi tendentsiyalar va o'zgarishlardan xabardor bo'lish uchun biz doimo bozorni o'rganamiz va tahlil qilamiz.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-4/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fa-solid fa-sack-dollar text-xl"></i>
                </div>
                <h6 className="text-xl mt-4 font-semibold text-white">
                Qulay narx
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                Narxlarni biznikidan pastroq topdingizmi? Biz uskunani raqobatchimizdan 10% arzonroq ta'mirlaymiz.
                </p>
              </div>
              <div className="w-full lg:w-4/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  {/* <i className="fas fa-poll text-xl"></i> */}
                  <i className="fa-solid fa-shield text-xl"></i>
                </div>
                <h5 className="text-xl mt-4 font-semibold text-white">
                Professionalizm
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                Bizning jamoamiz 11 yildan ortiq tajribaga ega hunarmandlardan iborat.
                </p>
              </div>
              <div className="w-full lg:w-4/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fa-solid fa-star text-xl"></i>
                </div>
                <h5 className="text-xl mt-4 font-semibold text-white">
                Sifatni tekshirish
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                Biz ish va o'rnatilgan ehtiyot qismlar uchun 6 oy kafolat beramiz.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900 -mt-2 sm:mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Biz bilan bog'lanishni istaysizmi?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Bu formani to'ldiring va 24 soat ichida sizga jabob beriladi.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Ism-familiya
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Sohibjon Abdialimov"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email yoki telefon raqam
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email yoki tel raqam"
                        style={{ transition: "all .15s ease" }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Xabar
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Xabar yozing ..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Xabar jo'natish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
