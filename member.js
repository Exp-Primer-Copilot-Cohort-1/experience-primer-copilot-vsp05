function skillsMembers() {
  return {
    restrict: 'E',
    templateUrl: 'app/members/skills-members.html',
    controller: 'SkillsMembersController',
    controllerAs: 'vm',
    scope: {
      skills: '=',
      members: '=',
      showSkills: '='
    }
  };
}