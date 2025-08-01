
<template>
<div class="bg-gray-100 screenHeight">
  <div>
    <h1 class="text-3xl lg:text-6xl text-center text-blue-600 p-10">This is an About Page</h1>
  </div>

  <!-- class元件化 寫在main.css那 -->
  <div class="card">
    <div class="shrink-0">
      <img class="size-12" src="/flower.png" alt="ChitChat Logo">
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-slate-500">You have a new message!</p>
    </div>
  </div>
  
  
  <!-- 基本環形邊框 -->
  <div class="ring-2 ring-blue-500 m-2 px-2">內容</div>
  <!-- 等同於：box-shadow: 0 0 0 2px rgb(59 130 246); -->
  
  <!-- 焦點環形邊框 -->
  <button class="focus:ring-2 focus:ring-blue-500 m-2 px-2">按鈕點擊focus</button>
  
  <!-- 環形邊框變化 -->
  <div class="ring-4 ring-red-500 ring-opacity-50  m-2 px-3">半透明紅色環形邊框</div>
  
  
  <!-- 基本陰影 -->
  <div class="shadow-md">內容</div>
  <!-- 等同於：box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); -->
  
  <!-- 不同陰影大小 -->
  <div class="shadow-sm">小陰影</div>
  <div class="shadow-lg">大陰影</div>
  <div class="shadow-2xl">超大陰影</div>
  
  <!-- 自定義陰影 -->
  <div class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">自定義陰影</div>

</div>

</template>
