import { zhCompare } from '@/utils'

// 新高一 80抵2000
const youHui1500 = [
  {'classCode': 'UIH35153', 'className': '新高一暑假优惠券B', 'classTime': '8/31 18:30-20:30', 'region': '姑苏区', 'campus': '姑苏文化宫', 'fee': 1500},
  {'classCode': 'UIH24039', 'className': '新高一暑假优惠券B', 'classTime': '8/31 18:30-20:30', 'region': '姑苏区', 'campus': '姑苏新平江商业广场', 'fee': 1500},
  {'classCode': 'UIH48009', 'className': '新高一暑假优惠券B', 'classTime': '8/31 18:30-20:30', 'region': '新区', 'campus': '新区熙金广场', 'fee': 1500},
  {'classCode': 'UIH04097', 'className': '新高一暑假优惠券B', 'classTime': '8/31 18:30-20:30', 'region': '新区', 'campus': '新区滨河路', 'fee': 1500},
  {'classCode': 'UIH36067', 'className': '新高一暑假优惠券B', 'classTime': '8/31 18:30-20:30', 'region': '园区', 'campus': '园区星海广场', 'fee': 1500},
  {'classCode': 'UIH41053', 'className': '新高一暑假优惠券B', 'classTime': '8/31 18:30-20:30', 'region': '吴江区', 'campus': '吴江财智', 'fee': 1500}
]

const dianJingClass = [
  {'classCode': 'UIH47006', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '相城宝燕商城'},
  {'classCode': 'UIH47008', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '相城宝燕商城'},
  {'classCode': 'UIH47009', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '相城宝燕商城'},
  {'classCode': 'UIH47007', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '相城宝燕商城'},
  {'classCode': 'UIH41057', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41058', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41054', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41056', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41060', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41059', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41055', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH41061', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江财智'},
  {'classCode': 'UIH06289', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06280', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06290', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06284', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06281', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06291', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06285', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06282', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06286', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06283', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06288', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH06287', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区贵都'},
  {'classCode': 'UIH15080', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区乐活城'},
  {'classCode': 'UIH15081', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区乐活城'},
  {'classCode': 'UIH15079', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区乐活城'},
  {'classCode': 'UIH01270', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏乐桥'},
  {'classCode': 'UIH01269', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏乐桥'},
  {'classCode': 'UIH33079', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33075', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33071', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33076', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33072', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33068', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33077', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33073', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33069', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33078', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33074', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH33070', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区绿宝广场'},
  {'classCode': 'UIH24045', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏平江新城'},
  {'classCode': 'UIH24043', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏平江新城'},
  {'classCode': 'UIH24044', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/11 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏平江新城'},
  {'classCode': 'UIH24042', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏平江新城'},
  {'classCode': 'UIH40037', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH40038', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH40039', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH40040', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH40041', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH40042', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH40043', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '园区旺墩路'},
  {'classCode': 'UIH35161', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35154', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35160', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35155', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35157', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35159', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35156', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH35158', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '姑苏工人文化宫'},
  {'classCode': 'UIH05286', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05283', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05287', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05284', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05288', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05285', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05290', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH05289', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴中大厦'},
  {'classCode': 'UIH48017', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48013', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48015', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48011', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48018', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48014', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48016', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH48012', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '新区熙金广场'},
  {'classCode': 'UIH46011', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46015', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46010', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46012', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46007', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46013', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46008', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46014', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/5 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'},
  {'classCode': 'UIH46009', 'className': '中考全科期末专题点睛班', 'classTime': '2020/1/4 08:00-20:30', 'nowFee': '0', 'fee': '799', 'campus': '吴江永康'}
]

function convertAndSortClass (classList) {
  if (!classList || !classList.length) return []

  let newList = []
  for (let c of classList) {
    c.filterCampus = c.campus
    c.campus += ` - ${c.classCode}`
    newList.push(c)
  }

  newList.sort((a, b) => {
    return zhCompare(a.campus, b.campus)
  })

  console.log(newList)

  return newList
}

export default {
  youHui1500: youHui1500.sort((a, b) => {
    return zhCompare(a.campus, b.campus)
  }),
  dianJingClass: convertAndSortClass(dianJingClass)
}
