import Sidebar from "./sidebar";


export default function LayoutWrapperSidebar({children}:{children:React.ReactNode}) {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 min-h-screen">
                {children}
            </main>
        </div>
    );
}