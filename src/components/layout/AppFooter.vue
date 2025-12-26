<template>
    <footer class="footer bg-white border-t">
        <div class="footer-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            <div class="footer-column">
                <div class="flex items-center gap-2 mb-4">
                    <img src="/logo.svg" alt="EduPress" class="w-400 h-auto">
                </div>
                <p class="text-gray-500 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur sed necessitatibus,
                    repudiandae fugit unde excepturi placeat officiis.
                </p>
            </div>

            <div class="footer-column">
                <h4 class="text-lg font-semibold mb-4">Get Help</h4>
                <ul class="space-y-2 text-gray-600">
                    <li><a href="#" class="hover:text-orange-500">Contact Us</a></li>
                    <li><a href="#" class="hover:text-orange-500">Latest Articles</a></li>
                    <li><router-link to="/FAQ" class="hover:text-orange-500">FAQ</router-link></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4 class="text-lg font-semibold mb-4">Programs</h4>
                <ul class="space-y-2 text-gray-600">
                    <li><a href="#" class="hover:text-orange-500">Art & Design</a></li>
                    <li><a href="#" class="hover:text-orange-500">Business</a></li>
                    <li><a href="#" class="hover:text-orange-500">IT & Software</a></li>
                    <li><a href="#" class="hover:text-orange-500">Languages</a></li>
                    <li><a href="#" class="hover:text-orange-500">Programming</a></li>
                </ul>
            </div>

            <div class="footer-column">
                <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
                <ul class="space-y-3 text-gray-600 text-sm">
                    <li>Address: 2321 New Design Str, Hudson Yards, USA</li>
                    <li>Tel: + (123) 2500-567-8988</li>
                    <li>Email: support@gmail.com</li>
                </ul>
                <div class="flex gap-4 mt-4 text-gray-500">
                    <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-pinterest-p"></i></a>
                    <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#" class="hover:text-orange-500"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>

        </div>
    </footer>

</template>
<script>
export default {

}
</script>
<style scoped></style>