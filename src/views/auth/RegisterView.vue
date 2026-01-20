<template lang="html">
	<div class="login w-full h-screen">
		<div class="grid grid-cols-1 md:grid-cols-3 h-full">
			<!-- Left -->
			<div class="image-section bg-blue-50 flex items-center justify-center p-8">
				<div class="relative w-full max-w-md">
					<img src="/login/left-image.png" alt="Login image" class="w-full h-auto" />
				</div>
			</div>


			<div class="content-section flex flex-col justify-center items-center p-8 bg-white md:col-span-2">
				<div class="w-full max-w-xl">
					<div class="flex items-center justify-end mb-12">
						<h3 class="text-gray-600 mr-10">Alreagy have an account?</h3>
						<button
							class="border-2 border-blue-500 text-blue-500 px-8 py-2 font-bold rounded hover:bg-blue-50 transition"
							@click="$router.push('login')">
							LOGIN
						</button>
					</div>
					<!-- Login -->
					<div class="flex flex-col">
						<h1 class="font-sm text-4xl mb-8 text-gray-800">Create an Account</h1>
						<p class="text-gray-400 text-xl mb-8">Sign up start editing your<a href="#" class="text-blue-500"> Course
								Approval form</a></p>

						<form>
							<div class="mb-6">
								<label class="text-gray-400 text-sm mb-2 block">USERNAME ADDRESS</label>
								<input type="email"
									class="border w-full h-12 px-4 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition" />
							</div>

							<div class="mb-4">
								<label class="text-gray-400 text-sm mb-2 block">PASSWORD</label>
								<input type="password"
									class="border w-full h-12 px-4 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition" />
							</div>

							<button type="submit"
								class="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition mb-6 cursor-pointer">
								Register
							</button>

							<div class="text-center">
								<p class="text-gray-400 text-sm mb-4">OR LOGIN USING</p>
								<div class="flex justify-between gap-4">
									<button type="button"
										class="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 transition cursor-pointer">
										<i class="fa-brands fa-facebook text-blue-500"></i>
										Facebook
									</button>
									<button type="button"
										class="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 transition cursor-pointer">
										<i class="fa-brands fa-google text-red-400"></i>
										Google
									</button>
									<button type="button"
										class="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 transition cursor-pointer">
										<i class="fa-brands fa-microsoft text-blue-500"></i>
										Microsoft
									</button>
								</div>
							</div>

							<p class="text-2xs text-gray-400 text-center mt-6">
								This site is protected by reCAPTCHA and the Google
								<a href="#" class="text-blue-500 hover:underline">Privacy Policy</a> and
								<a href="#" class="text-blue-500 hover:underline">Terms of Service</a> apply.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>