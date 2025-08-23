<div class=" flex flex-1 flex-col items-center justify-center">
    <form class="p-6 card bg-surface-50-950 flex flex-col gap-4 items-center justify-center" action="?/login" method="post">
        <h1 class="text-3xl font-bold">Log in</h1>
        <input class="input" name="email" type="text" placeholder="Email"/>
        <input class="input" name="password" type="password" placeholder="Password"/>
        <button class="btn bg-primary-400 w-full">Log in</button>
        <div class="w-full flex items-center justify-center gap-2"><span>don't have an account?</span> <a href="/register" class="text-primary-400">Create an account</a></div>
    </form>
</div>