function Footer() {
  return (
    <div className="container">
      <div>
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="mx-auto w-full max-w-screen-xl p-6 md:py-10">
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="self-center text-2xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                Pettin<span className="text-blue-600">.</span>
              </span>

              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="https://github.com/Yukimaed27"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-white"
                >
                  Facebook
                </a>
                <a
                  href="https://github.com/LeandroPazKarol"
                  className="text-gray-500 hover:text-blue-600 dark:hover:text-white"
                >
                  Github
                </a>
              </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="text-center">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2026{" "}
                <a href="https://yukastaelportfolio.vercel.app/" className="hover:underline">
                  Pettin™
                </a>
                . Todos los derechos reservados.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;