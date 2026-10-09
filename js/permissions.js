/* STEM HUB permission policy — UI demo only, not server-side security. */
(function () {
  'use strict';
  const roleMeta = {admin:{name:'Quản trị viên',caption:'Toàn quyền · Demo',avatar:'AD',pages:['dashboard','members','departments','activities','tasks','events','ranking','achievements','finance','announcements','reports','settings']},leader:{name:'Trưởng ban',caption:'Quản lý ban · Demo',avatar:'TB',pages:['dashboard','departments','activities','tasks','events','ranking','achievements','announcements','reports']},member:{name:'Thành viên',caption:'Thành viên CLB · Demo',avatar:'TV',pages:['dashboard','tasks','events','ranking','achievements','announcements']}};
  function canPage(role, page) {
    return Boolean(roleMeta[role] && roleMeta[role].pages.includes(page));
  }
  function canAction(role, allowedRoles) {
    return Array.isArray(allowedRoles) && allowedRoles.includes(role);
  }
  window.STEMHUBPermissions = Object.freeze({
    roleMeta: Object.freeze(roleMeta),
    canPage,
    canAction,
    describe(role) { return roleMeta[role] || roleMeta.member; }
  });
}());
