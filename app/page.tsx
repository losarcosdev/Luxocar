import {
  LandingHeader,
  BrandsList,
  AboutUs,
  CommonQuestions,
  ClientsReview,
} from "./components";

const HomePage = () => {
  return (
    <>
      <LandingHeader />
      <section>
        <BrandsList />
        <main>
          <AboutUs />
          <CommonQuestions />
          <ClientsReview />
        </main>
      </section>
      <footer className="text-white border-t-[#232323] border-l-0 border-r-0 border-b-[#232323] border-[1px] bg-[#111111] h-[20vh]"></footer>
    </>
  );
};

export default HomePage;
