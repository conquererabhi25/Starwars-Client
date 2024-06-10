import {Vortex} from "react-loader-spinner"


const Loader =()=>(
    <div className="products-details-loader-container h-screen w-full flex items-center justify-center" data-testid="loader">
      <Vortex type="ThreeDots" color="#0b69ff" height="80" width="80" />
    </div>
)

export default Loader