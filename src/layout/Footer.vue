<template>
  <footer class="bg-yellow-800 text-white py-12">
    <div class="container mx-auto px-4  flex flex-col md:flex-row">
      <div class="md:w-2/3 flex flex-col justify-center">
        <h3 class="text-2xl font-medium mb-6">{{$t('contact')}}</h3>
        <ul class="list-reset">
          <li class="mb-3">
            <span class="mr-2">{{$t('address')}}:</span>
            Route de souihla Marrakech
          </li>
          <li class="mb-3 flex flex-wrap">
            <span class="mr-2">{{$t('phone')}} :</span>

              <a href="tel:0663792846" class="underline">06 63 79 28 46</a>&nbsp;&nbsp;-&nbsp;&nbsp;
              <a href="tel:0663071042" class="underline">06 63 07 10 42</a>&nbsp;&nbsp;-&nbsp;&nbsp;
              <a href="tel:0641919939" class="underline">06 41 91 99 39</a>


          </li>
          <li class="mb-3">
            <span class="mr-2">Email:</span>
            <a href="mailto:contact@wild-rabbit.com">contact@wild-rabbit.com</a>
          </li>
        </ul>
      </div>
      <div class="md:w-1/3 mt-16 md:mt-0">
        <div class="w-full h-64 rounded-sm overflow-hidden" id="map">
          <iframe src="https://maps.google.com/maps?q=wild%20rabbit%20marrakech&t=k&z=17&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>