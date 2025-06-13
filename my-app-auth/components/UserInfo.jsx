export default function UserInfo () {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-8 rounded-md border-t-4 bg-zince-300/10 border-green-400 flex flex-col gap-2 my-6">
            <div>
                Name: <span className="font-bold">John Doe</span>
            </div>
            <div>
                Email: <span className="font-bold">JohnDoe@mail.com</span>
            </div>
            <button className="bg-red-500 text-white font-bold my-2 py-2 rounded-md">Logout</button>
            </div>
        </div>

    )
}