export function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-6"></div>
                <h2 className="text-xl font-nromal font-title">Carregando produtos...</h2>
            </div>
        </div>
    );
}