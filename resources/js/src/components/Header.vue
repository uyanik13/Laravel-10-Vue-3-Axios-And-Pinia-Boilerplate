<template>
	<header
		class="flex flex-row  items-center justify-center w-full z-50 bg-white border-b dark:border-gray-600 dark:bg-gray-900 desktop:h-12"
	>
		<div class="flex flex-col justify-end">
			<ul class="header-ul">
				<li class="header-li">
					<router-link
						aria-current="page"
						class="nav-link"
						to="/"
						:class="{ active: $route.path == '/' }"
						>Home
					</router-link>
				</li>
				<li class="header-li">
					<router-link
						class="nav-link"
						:class="{ active: $route.path == '/todo-app' }"
						to="/todo-app"
						>Todo App with Pinia
					</router-link>
				</li>
				<li class="header-li">
					<router-link
						class="nav-link"
						:class="{ active: $route.path == '/axios' }"
						to="/axios"
						>Axios
					</router-link>
				</li>
			</ul>
		</div>
	</header>
</template>

<script setup lang="ts">
</script>