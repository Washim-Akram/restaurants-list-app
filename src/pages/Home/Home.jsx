import RestaurantList from "../../components/RestaurantList/RestaurantList";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium py-4 font-mono text-center">
        List Of Restaurants Categorized By Their Location States!
      </h1>
      <hr className="py-4" />
      <RestaurantList />
    </div>
  );
};

export default Home;
