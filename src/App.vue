<template>
  <div class="page">
    <ResumeHeader />
    <EducationSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ToolchainSection />
    <SelfAssessment />
  </div>
</template>

<script setup>
import ResumeHeader from './components/ResumeHeader.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ToolchainSection from './components/ToolchainSection.vue'
import SelfAssessment from './components/SelfAssessment.vue'
</script>
