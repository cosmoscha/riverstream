export const styles = {
  pageContainer: "w-full max-w-3xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-lg shadow-lg relative z-10",
  contentSection: "space-y-4 px-6",
  pageTransition: {
    base: "transition-opacity duration-500 ease-in-out transform",
    visible: "opacity-100 translate-y-0",
    hidden: "opacity-0 translate-y-5"
  },
  typography: {
    headerPrimary: " text-gray-800 dark:text-gray-200 text-3xl sm:text-4xl font-bold mb-6 text-center pt-6",
    headerSecondary: " text-gray-800 dark:text-gray-200 text-xl font-bold mb-2",
    textBase: "text-gray-800 dark:text-gray-200 text-base sm:text-lg text-center"
  },
  components: {
    card: "bg-white/30 dark:bg-gray-800/30 p-4 rounded-lg",
    navLink: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300",
    themeButton: "p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/50 transition-colors duration-300",
    glassEffect: "backdrop-blur-md bg-white/30 dark:bg-gray-900/30",
    glassBorder: "border-white/20 dark:border-gray-700/50"
  },
  layout: {
    sidebar: "fixed top-0 left-0 h-screen z-30 transition-all duration-300 ease-in-out flex flex-col",
    footer: "w-full py-4 mt-auto fixed bottom-0 left-0 right-0 z-30 border-t",
    mainContent: "flex-1 flex flex-col min-h-screen ml-16",
    contentContainer: "flex-grow py-16 px-4 overflow-y-auto"
  }
};