const Footer=()=>{
    return(
        <>
            <div className="py-5 border bg-gray-100 flex justify-between px-72">
                <div>
                    <p>@2024 Vijay Jadhav <span>All Rights Reserved</span></p>
                </div>
                <div className="space-x-5">
                    <a className="hover:underline" href="/about">About</a>
                    <a className="hover:underline" href="/">Privacy Policy</a>
                    <a className="hover:underline" href="/">Licensing</a>
                    <a className="hover:underline" href="/">Contact</a>       
                </div>
            </div>
        </>
    )
}
export default Footer;