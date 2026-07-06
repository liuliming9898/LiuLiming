<template>
  <section class="section">
    <h2>工具链项目</h2>

    <div class="project">
      <h3>MeasureToMade 服装订制软件</h3>
      <div class="meta">C++ · 自主研发版型模拟引擎</div>
      <div class="desc">根据客户身材快速生成合适版型，核心亮点在于解决罩杯等疑难部位的自动改版与版式库自动匹配。</div>
      <ul class="duty-list">
        <li>数据结构设计及编码</li>
        <li>2D 交互功能实现</li>
        <li>部分尺码变形算法实现</li>
      </ul>
    </div>

    <div class="project">
      <h3>Web 端 BodyDeform 身材变形工具</h3>
      <div class="meta">Vue + Babylon.js + C++ 后端</div>
      <div class="desc">修改人体模型尺寸的客户端工具。</div>
      <ul class="duty-list">
        <li>前端采用 Vue + Babylon 渲染引擎</li>
        <li>后端 C++ 中间层接口与底层身材变形算法</li>
        <li>变形模型存储服务器实现快速加载</li>
      </ul>
    </div>

    <div class="project">
      <h3>OptixRender 渲染器</h3>
      <div class="meta">OptiX 框架</div>
      <div class="desc">为验证物理渲染算法在 Optix 框架下实现的渲染器。</div>
      <ul class="duty-list">
        <li>混合渲染实现</li>
        <li>快速出图功能</li>
      </ul>
    </div>
  </section>
</template>
