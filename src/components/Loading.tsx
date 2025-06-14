export function Loading() {
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
                <div
                    className="w-20 h-20 border-4 border-transparent text-purple-400 text-4xl animate-spin flex items-center justify-center border-t-purple-400 rounded-full"
                >
                    <div
                        className="w-16 h-16 border-4 border-transparent text-purple-700 text-2xl animate-spin flex items-center justify-center border-t-purple-700 rounded-full"
                    />
                </div>
                <h2 className="font-title text-2xl">Carregando...</h2>
            </div>
        </div>
    );
}