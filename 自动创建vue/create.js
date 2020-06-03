const path = require('path');
const fs = require('fs');
let array = [
  [
    'attendanceMenu',
    [
      'ManualClockIn',
      'LeaveManage',
      [
        [
          'studentAttendanceMenu',
          [
            'StudentSchoolStatistics',
            'StudentAttendanceDetails',
            'StudentAttendanceStatistics',
          ]
        ],
        [
          'teacherAttendanceMenu',
          [
            'TeacherAttendanceSetting',
            'TeacherSchoolStatistics',
            'TeacherAttendanceDetails',
            'TeacherAttendanceStatistics',
          ]
        ]
      ]
    ]
  ]
]
function template(name) {
  let template = `<template>
  <div class="${name}">
    <div class="div-cont">

    </div>
  </div>
</template>
<script>
export default {
  name: "${name.substring(0, 1).toLocaleUpperCase() + name.substring(1)}",
  data() {
    return {
      
    };
  },
  mounted() {
    
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
.${name} {

}
</style>`
  return template;
}
// console.log(__dirname);
function write(array,dir){
  for (let index = 0; index < array.length; index++) {
    let name = array[index];
    if (name instanceof Array) {
      dir = dir==null? name[0] : dir+"\\"+name[0];
      for (let index = 0; index < name[1].length; index++) {
        let element = name[1][index];
        if (element instanceof Array) {
          write(element,name[0])
        } else {
          fs.mkdirSync(`${__dirname}\\${dir}`, { recursive: true });
          // console.log(`${__dirname}\\${dir}\\${element}.vue`)
          fs.writeFileSync(`${__dirname}\\${dir}\\${element}.vue`, template(element.substring(0, 1).toLocaleLowerCase() + element.substring(1)));
          if (index==name[1].length-1) {
            dir = dir.replace(/\\[^\\/]*$/,'');
          }
        }
      }
      continue;
    }
    fs.writeFile(`${__dirname}\\${name}.vue`, template(name.substring(0, 1).toLocaleLowerCase() + name.substring(1)), function (err) {
      if (err) {
        return console.error(err);
      }
      console.log("数据写入成功2！");
    });
  }
}
write(array,null)