"use client";

export default function PrivateCodePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="absolute top-8 left-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-lg font-semibold text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Volver</span>
        </button>
      </div>
      <div className="text-center p-8">
        <div className="mx-auto mb-6 h-24 w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Acceso Restringido
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Por motivos de confidencialidad y acuerdos comerciales, el código
          fuente de este proyecto es privado y no puede ser compartido
          públicamente.
        </p>
      </div>
    </div>
  );
}
