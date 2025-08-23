<script>
    let {data ,form} = $props();
    console.log(form);  
</script>
<div class=" flex flex-1 flex-col items-center justify-center">
    <form class="p-6 card bg-surface-50-950 flex flex-col gap-4 items-center justify-center" action="?/register" method="post">
        <h1 class="text-3xl font-bold">Create an account</h1>
        <div class="flex gap-2">
            <input type="text" placeholder="First Name" name="first_name" required  class="input w-36"/>
            <input type="text" placeholder="Last Name"  name="last_name" required class="input w-36"/>
        </div>
        <input required class="input" name="email" type="text" placeholder="Email"/>
        <input required class="input" name="password" type="password" placeholder="Password"/>
        <button class="btn bg-primary-400 w-full">Register</button>
        <div class="w-full flex items-center justify-center gap-2"><span>already have an account?</span> <a href="/login" class="text-primary-400">Login</a></div>
    </form>
    {#if form?.errors}
    {#each form.errors as error}
        <div class="mt-4 card bg-error-500 text-white p-4 flex flex-col gap-2">
            
                <p>{error}</p>
            
        </div>
        {/each}
    {/if}
</div>
