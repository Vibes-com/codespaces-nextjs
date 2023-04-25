import { AboutCategory } from "../../comps/category/AboutCategory"
import {CategoryTabs as Cat} from "../../comps/category/Tabs"
import Banner from "../../comps/category/Banner"
const Index = () => {
  return (
    <div className="container-fluid">

        <Banner/>
        <AboutCategory/>
        <Cat/>
    </div>
  )
}

export default Index