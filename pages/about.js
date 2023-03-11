import Layout from '../src/components/layout';
import { HEADER_FOOTER_ENDPOINT } from '../src/utils/constants/endpoints';
import axios from 'axios';

const About = ({ headerFooter }) => {
    return (
      <div>
        <Layout headerFooter={headerFooter || {}}>
      <div className="flex flex-wrap w-full items-center justify-center my-16">
        <div className="w-full md:w-1/2 lg:w-2/5 mx-auto px-4">
          <img className="w-full rounded-lg shadow-lg mb-4" src="https://backend.villaruya.co.za/wp-content/uploads/2023/03/Untitled_design_2_copy_720x.webp" alt="Company logo" />
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Villaruya</h1>
          <p className="text-gray-700 text-xl mb-6">
            Villaruya is a luxury Turkish towel online store, dedicated to providing the highest quality products for our customers. Our towels are made from the finest Turkish cotton, and are carefully crafted to create a soft, absorbent, and durable towel that will last for years to come.
          </p>
          <p className="text-gray-700 text-xl mb-6">
            Our towels are perfect for a variety of uses, from beach trips to pool days, and are available in a wide range of colors and styles to fit any taste or décor. At Villaruya, we believe that the perfect towel can make all the difference, and we are dedicated to providing our customers with the best of the best.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center my-16">
        <div className="w-full md:w-1/2 lg:w-3/5 mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 text-xl mb-6">
            Villaruya was founded in 2018 by a group of friends who shared a love of beautiful, high-quality towels. We were inspired by the traditional Turkish towels that we discovered on a trip to Istanbul, and we knew that we wanted to share these amazing products with the world.
          </p>
          <p className="text-gray-700 text-xl mb-6">
            Since then, we have worked tirelessly to create the perfect towel, sourcing the best materials and collaborating with talented designers to create unique and beautiful products that our customers love. We are proud to offer a wide range of towels, from classic striped designs to modern geometric patterns, and we are always working to innovate and improve our products.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 mx-auto px-4">
          <img className="w-full rounded-lg shadow-lg mb-4" src="https://backend.villaruya.co.za/wp-content/uploads/2023/03/Sud_sand_bath2_720x.webp" alt="Company founders" />
        </div>
      </div>
    </Layout>
        
      </div>
    );
  };
  

  export async function getStaticProps() {
	
	const { data: headerFooterData } = await axios.get( HEADER_FOOTER_ENDPOINT );
	
	return {
		props: {
			headerFooter: headerFooterData?.data ?? {},
		},
		
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};
}
  export default About;
  