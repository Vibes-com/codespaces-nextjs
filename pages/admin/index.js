import Blogtable from '../../admin_components/dashboard/Blogtable';
import Sidenav from '../../admin_components/dashboard/Sidenav';
import Topnav from '../../admin_components/dashboard/topnav';


export default function Admin() {
  return (
    <>
      <div className='main_content-admin'>
        <Topnav/>
        <Sidenav/>
        <Blogtable/>
      </div>
    </>
  )
}
