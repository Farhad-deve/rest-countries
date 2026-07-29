

const LoadingPage = () => {
  return (
    <>
        <div className="flex items-center justify-center gap-4 min-h-screen bg-[#fcfcfc] dark:bg-[#202c37]">
            <div className="border-[3px] border-[#ccc] border-b-black dark:border-b-[#2b3945] w-7 h-7 rounded-full animate-spin"></div>
            <p className="dark:text-white text-xl">Loading country...</p>
        </div>
    </>    
  )
}

export default LoadingPage