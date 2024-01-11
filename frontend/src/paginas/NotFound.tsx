
const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[50vh]">
        <h1 className="text-3xl text-[#23A455] font-semibold">Page Not Found</h1>
        <a href="/inicio" className="bg-[#23A455] text-white font-medium py-2 px-4  rounded-md hover:bg-[#4fa570]">Volver al inicio</a>
    </div>
  )
}

export default NotFound