const Register = () => {
  return (
    <div className="relative flex h-dvh flex-row items-center justify-center bg-[url('https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg')] bg-cover bg-right bg-no-repeat">
      <div className="absolute z-0 size-full bg-transparent opacity-0 dark:bg-black dark:opacity-90"></div>
      <form className="base-bg-normal custom-shadow-outer z-10 flex flex-col items-center justify-center gap-4 rounded-2xl p-6 md:gap-8 md:p-12">
        <h1>Register</h1>
        <input type="email" id="email-input" className="w-full" placeholder="Your Email" />
        <input type="password" id="password-input" className="w-full" placeholder="Your Password" />
        <input type="password" id="confirm-input" className="w-full" placeholder="Confirm Password" />
        <button className="btn-filled flex h-12 w-full items-center justify-center">Register</button>
        <div className="text-center">
          <span>Already have an account? </span>
          <a href="/login">Login now!</a>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="w-32 border border-slate-500 md:w-48"></div>
          <span className="base-text-off">Or</span>
          <div className="w-32 border border-slate-500 md:w-48"></div>
        </div>
        <button className="btn-filled flex h-12 w-full items-center justify-center gap-4 p-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_259_1757)">
              <path
                d="M30.2339 32.0001C31.2091 32.0001 32 31.2094 32 30.234V1.76612C32 0.790625 31.2091 0 30.2339 0H1.76612C0.7905 0 0 0.790625 0 1.76612V30.234C0 31.2094 0.7905 32.0001 1.76612 32.0001H30.2339Z"
                fill="white"
              />
              <path
                d="M22.0793 32V19.6079H26.2389L26.8616 14.7785H22.0793V11.695C22.0793 10.2968 22.4676 9.34388 24.4728 9.34388L27.0301 9.34276V5.02338C26.5876 4.96451 25.0696 4.83301 23.3036 4.83301C19.6164 4.83301 17.0921 7.08363 17.0921 11.2169V14.7785H12.9219V19.6079H17.0921V32H22.0793Z"
                fill="#395185"
              />
            </g>
            <defs>
              <clipPath id="clip0_259_1757">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-white">Register with Facebook</span>
        </button>
        <button className="btn-outlined flex h-12 w-full items-center justify-center gap-4 p-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_259_1754)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.38468 16.0001C7.38468 14.9839 7.55345 14.0097 7.85468 13.0959L2.58213 9.06958C1.55454 11.156 0.975586 13.5069 0.975586 16.0001C0.975586 18.4911 1.55383 20.8406 2.58 22.9256L7.84969 18.8914C7.55131 17.9819 7.38468 17.0113 7.38468 16.0001Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6424 6.75547C18.85 6.75547 20.8439 7.53769 22.4106 8.81769L26.9682 4.26658C24.1909 1.8488 20.6303 0.355469 16.6424 0.355469C10.4512 0.355469 5.13025 3.89609 2.58228 9.06942L7.85482 13.0957C9.0697 9.40791 12.5327 6.75547 16.6424 6.75547Z"
                fill="#EB4335"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.6424 25.2446C12.5327 25.2446 9.0697 22.5921 7.85482 18.9043L2.58228 22.9299C5.13025 28.1039 10.4512 31.6446 16.6424 31.6446C20.4636 31.6446 24.1118 30.2878 26.8499 27.7455L21.8452 23.8764C20.433 24.766 18.6549 25.2446 16.6424 25.2446Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31.5969 16C31.5969 15.0755 31.4545 14.08 31.2408 13.1555H16.6423V19.2H25.0454C24.6252 21.2608 23.4815 22.8451 21.8451 23.8762L26.8499 27.7454C29.7261 25.0759 31.5969 21.0993 31.5969 16Z"
                fill="#4285F4"
              />
            </g>
            <defs>
              <clipPath id="clip0_259_1754">
                <rect width="32" height="32" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <span>Register with Google</span>
        </button>
      </form>
    </div>
  )
}

export default Register
