import { Outlet } from "react-router-dom";


export default function DashboardLayout(){


return (

<div>

<header>
<h1>
Dashboard
</h1>
</header>


<main>

<Outlet />

</main>


</div>

);


}