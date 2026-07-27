import { Outlet } from "react-router-dom";


export default function AdminLayout(){

return (

<div>

<header>
<h1>
Admin Panel
</h1>
</header>


<main>

<Outlet />

</main>


</div>

);

}