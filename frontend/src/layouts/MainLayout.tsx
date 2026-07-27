import { Outlet } from "react-router-dom";


export default function MainLayout(){

return (

<div>

<header>
<h1>
Fortune Funding
</h1>
</header>


<main>

<Outlet />

</main>


</div>

);

}