import Button from "./Button"

const NewsletterHome = () => {
  return (
    <section className="h-52 flex flex-col gap-4 items-center justify-center text-white bg-black">
        <p className="text-base md:text-lg">Catch the latest styles before anyone else</p>
        <Button title='sign up' />
    </section>
  )
}

export default NewsletterHome
