<script>
    import { afterNavigate } from "$app/navigation";
    import Logo from '$lib/assets/components/Logo.svelte';
    import Icon from '@iconify/svelte';
    import Growth from '$lib/assets/pictures/growing.svg'
    import { page } from "$app/stores";
    let packages = $state();
    afterNavigate(() => {
        if($page.url.searchParams.get('section') === 'packages') {
            packages.scrollIntoView({ behavior: 'smooth' });
        }
    });
</script>

<section>
    <div class="s1 flex my-6 lg:my-16 justify-center items-center">
        <Logo classs="fill-primary-500 h-70"/>
    </div>
    <div class="mid flex items-center justify-center">
        <a href="/auth" class="btn bg-primary-500 text-3xl">Subscribe</a>
    </div>
    <div class="ps my-6 gap-10 flex flex-col md:flex-row md:my-0 justify-between items-center px-12">
        <article class="w-full md:w-1/4">
            <h3 class="text-2xl text-center">Hamburger</h3>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae iste. Expedita, sunt in. Harum iusto</p>
        </article>
        <article class="w-full md:w-1/4">
            <h3 class="text-2xl text-center">Hamburger</h3>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quae iste. Expedita, sunt in. Harum iusto</p>
        </article>
    </div>
</section>
<section class="my-16">
    <h1 class="text-4xl text-center">Why us?</h1>
    <div class="things grid grid-cols-2 p-12 gap-12">
        <div class="card p-4">
            <Icon icon="line-md:account-remove" class="text-9xl" />
            <h1 class="text-2xl font-semibold">Ham</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur corporis ducimus unde vitae, culpa dolorem vel saepe quis eligendi? </p>
        </div>
        <div class="card p-4">
            <Icon icon="meteor-icons:gear" class="text-9xl" />
            <h1 class="text-2xl font-semibold">Ham</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur corporis ducimus unde vitae, culpa dolorem vel saepe quis eligendi? </p>
        </div>
        <div class="card p-4">
            <Icon icon="mdi:shield-tick" class="text-9xl" />
            <h1 class="text-2xl font-semibold">Ham</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur corporis ducimus unde vitae, culpa dolorem vel saepe quis eligendi? </p>
        </div>
        <div class="card p-4">
            <Icon icon="tabler:lock-filled" class="text-9xl" />
            <h1 class="text-2xl font-semibold">Ham</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consequatur corporis ducimus unde vitae, culpa dolorem vel saepe quis eligendi? </p>
        </div>
    </div>
</section>
<section class="flex flex-col items-center gap-12">
    <div class="s1 flex flex-col lg:flex-row items-center justify-between gap-4 m-12">
        <article class="w-full md:w-1/2 text-center flex flex-col gap-4">
            <h2 class="text-4xl text-center">What we do?</h2>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae provident earum quo. Unde tempora adipisci nulla tempore, nisi nam aliquam necessitatibus, eveniet vel temporibus exercitationem consequatur animi possimus quisquam.</p>
        </article>
        <div class="img aspect-square bg-primary-400 h-50"></div>
    </div>
    <div class="s1 flex flex-col lg:flex-row items-center justify-between gap-4 m-12">
        <div class="img aspect-square bg-primary-400 h-50"></div>
        <article class="w-full md:w-1/2 text-center flex flex-col gap-4">
            <h2 class="text-4xl text-center">Automate your networkings</h2>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae provident earum quo. Unde tempora adipisci nulla tempore, nisi nam aliquam necessitatibus, eveniet vel temporibus exercitationem consequatur animi possimus quisquam.</p>
        </article>
    </div>
    <div class="s1 flex flex-col lg:flex-row items-center justify-between gap-4 m-12">
        <article class="w-full md:w-1/2 text-center flex flex-col gap-4">
            <h2 class="text-4xl text-center">integrate with Monitoring</h2>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae provident earum quo. Unde tempora adipisci nulla tempore, nisi nam aliquam necessitatibus, eveniet vel temporibus exercitationem consequatur animi possimus quisquam.</p>
        </article>
        <div class="img aspect-square bg-primary-400 h-50"></div>
    </div>
</section>
<section class="flex items-center justify-cente p-6">
    <article class="w-full md:w-1/3 mx-auto text-center flex flex-col gap-4 items-center">
        <h2 class="text-4xl">We are constantly growing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae provident earum quo. Unde tempora adipisci nulla tempore, nisi nam aliquam necessitatibus, eveniet vel temporibus exercitationem consequatur animi possimus quisquam.</p>
    </article>
    <img src={Growth} alt="Growth" class="w-full md:w-2/3 h-auto" />
</section>
<section bind:this={packages} class="packages">
    <h2 class="text-4xl text-center my-6">Packages</h2>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 p-12">
        <div class="card h-[50vh] bg-surface-700 p-4">
            <h3 class="text-2xl">Free<span class="text-sm mx-2 font-semibold">$0/month</span></h3>
            <ul>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
            </ul>
        </div>
        <div class="card h-[50vh] bg-tertiary-700 p-4">
            <h3 class="text-2xl">Basic<span class="text-sm mx-2 font-semibold">$0/month</span></h3>
            <ul>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
            </ul>
        </div>
        <div class="card h-[50vh] bg-success-700 p-4">
            <h3 class="text-2xl">Standard<span class="text-sm mx-2 font-semibold">$0/month</span></h3>
            <ul>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
            </ul>
        </div>
        <div class="card h-[50vh] bg-warning-700 p-4">
            <h3 class="text-2xl">Enterprize<span class="text-sm mx-2 font-semibold">$0/month</span></h3>
            <ul>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
                <li>Feature</li>
            </ul>
        </div>
        </div>
</section>