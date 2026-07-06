<template>
  <section class="section">
    <h2>项目经历</h2>

    <div class="project">
      <h3>项目1：时尚设计师软件</h3>
      <div class="meta">2020.09 — 至今 · 技术负责人</div>
      <div class="desc">方便服装设计师快速设计衣服并查看效果的桌面软件。</div>
      <ul class="duty-list">
        <li>基于 Qt 搭建软件框架：渲染引擎接口、Undo/Redo、序列化、模拟引擎接口、数据存储、单元测试框架</li>
        <li>数据结构设计：Vertex、Line、Pattern、Mesh 等</li>
        <li>独立完成几何库：BSpline 算法、半边结构 Mesh 设计与算法、网格化封装与改进、网格简化</li>
      </ul>
    </div>

    <div class="project">
      <h3>项目2：王华民教授 SIGGRAPH 论文技术支持</h3>
      <div class="meta">2020.10 — 2021.03 · 团队负责人</div>
      <div class="desc">为 SIGGRAPH 论文顺利录用提供技术团队支持。</div>
      <ul class="duty-list">
        <li>CPU 版本 Mesh 转换为 GPU 版本 Mesh</li>
        <li>CUDA 版本基础数学计算</li>
        <li>人体骨骼动画驱动衣服模拟生成原始网格</li>
        <li>搭建云渲染服务器并渲染所有帧数据</li>
      </ul>
    </div>

    <div class="project">
      <h3>项目3：USCAD 多套虚拟服装模拟渲染系统</h3>
      <div class="meta">2015.07 — 至今 · 软件开发组组长</div>
      <div class="desc">为虚拟服装产业快速生成大量服装模型并渲染的系统，集纸样制版、缝合关系建立、3D快速生成、2D/3D映射、多款式组合生成、混合渲染等功能。</div>
      <ul class="duty-list">
        <li>2D 编辑功能、2D 三角化算法实现</li>
        <li>2D 网格到 3D 网格的映射算法</li>
        <li>3D 模拟交互开发</li>
        <li>纹理对齐、镜像、拉伸算法与界面交互</li>
        <li>资源管理器设计（场景/纹理/包边厚度/刚体资源）</li>
        <li>在架构师框架下带领组员完成整体开发</li>
      </ul>
    </div>

    <div class="project">
      <h3>项目4：Style3D 单套服装模拟显示软件</h3>
      <div class="meta">2014.06 — 2015.07 · 开发工程师</div>
      <div class="desc">设计师完成打版、模拟及渲染的桌面软件。</div>
      <ul class="duty-list">
        <li>MFC + Physx 物理引擎进行布料模拟</li>
        <li>不同片网格之间的缝合关系处理</li>
        <li>网格自碰撞关系处理</li>
        <li>模拟后期网格处理：厚度、包边等效果</li>
      </ul>
    </div>
  </section>
</template>
