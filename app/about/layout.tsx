export default function AboutLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
      </div>
    )
  }