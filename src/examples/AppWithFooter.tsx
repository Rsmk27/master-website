import HoverFooter from "@/components/demo/HoverFooter"

function App() {
    return (
        <div className="min-h-screen bg-[#0A0A0C] text-gray-300">
            {/* Your existing app content goes here */}
            <main className="container mx-auto p-8">
                <h1 className="text-4xl font-bold text-white mb-8">
                    Welcome to Your App
                </h1>
                <p className="text-lg text-gray-400 mb-12">
                    Scroll down to see the amazing hover footer effect!
                </p>

                {/* Add some content to show the footer at the bottom */}
                <div className="min-h-[60vh]">
                    {/* Your page content */}
                </div>
            </main>

            {/* Hover Footer Component */}
            <HoverFooter />
        </div>
    )
}

export default App
