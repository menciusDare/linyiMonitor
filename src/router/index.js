import Vue from 'vue'
import Router from 'vue-router'
import LoginHtml from '../components/loginHtml'
import loginByToken from '../components/loginByToken'
import amfHomeHtml from '@/components/common/page/AmfHomeHtml'
/************************************ zys start ***************************************/
import menu from '../components/page/role/menuManager'

import roleList from '../components/page/role/RoleList'
import userList from '../components/page/role/UserList'
import videoMonitor from '../components/page/standingBook/VideoMonitor'
import provincialFiveLinked from '../components/page/fiveLinked/ProvincialFiveLinkedList'
import fiveLinkedInfo from '../components/page/fiveLinked/FiveLinkedInfo'
import cityFiveLinkedList from '../components/page/fiveLinked/CityFiveLinkedList'
import medicalTransfer from '../components/page/fiveLinked/medicalTransfer'
import transferCity2 from "../components/page/transfer/TransferCity2.vue";
import newEntBase from "../components/page/standingBook/newEntBase.vue"
import entManagementMonthReport from '../components/page/realTime/entManagementMonthReport';
import entManagementYearReport from '../components/page/realTime/entManagementYearReport';
/************************************ zys end ***************************************/


/************************************* zxl start ***************************************/
import collectVideoMonitor from '../components/page/standingBook/collectVideoMonitor'
import managementVideoMonitor from '../components/page/standingBook/managementVideoMonitor'
import wasteVideoMonitor from '../components/page/standingBook/wasteVideoMonitor'
import collectEnterpriseMonitor from '../components/page/standingBook/collectEnterpriseMonitor'
import managermentEnterpriseMonitor from '../components/page/standingBook/managermentEnterpriseMonitor'
import wasteEnterpriseMonitor from '../components/page/standingBook/wasteEnterpriseMonitor'
import medicalEnterpriseMonitor from '../components/page/standingBook/medicalEnterpriseMonitor'
import collectProductionBook from "../components/page/standingBook/collectProductionBook";
import wasteProductionBook from "../components/page/standingBook/wasteProductionBook";
import medicalProductionBook from "../components/page/standingBook/medicalProductionBook";
import managementProductionBook from "../components/page/standingBook/managementProductionBook";
import collectStorageFacilityMonitorin from '../components/page/realTime/collectStorageFacilityMonitorin'
import managerStorageFacilityMonitoring from '../components/page/realTime/managerStorageFacilityMonitoring'
import wasteStorageFacilityMonitoring from '../components/page/realTime/wasteStorageFacilityMonitoring'
import enterpriseManagement from '../components/page/standingBook/enterpriseManagement'
import wxenterpriseManagement from '../components/page/standingBook/wxenterpriseManagement'
import ylenterpriseManagement from '../components/page/standingBook/ylenterpriseManagement'
import enterprisesInfo from '../components/page/standingBook/enterprisesInfo'
import enterpriseProductionBook from '../components/page/standingBook/enterpriseProductionBook'
import collectEnterpriseProductionBook from '../components/page/standingBook/collectEnterpriseProductionBook'
import managementEnterpriseProductionBook from '../components/page/standingBook/managementEnterpriseProductionBook'
import smspush from '../components/page/smspush/smspush'
import wasteproDuctionManagement from '../components/page/standingBook/ProductionAndWasteUnit' //??????????????????
import businessDuctionManagement from '../components/page/standingBook/ManagementOfBusinessUnit' //??????????????????
import enterpriseProductionBookgF from '../components/page/SolidWasteControl/enterpriseProductionBookgF' //??????????????????


/************************************* zxl end ***************************************/



/************************************ lx start ***************************************/
import transferCity from "../components/page/transfer/TransferCity";
import transferCityProvince from "../components/page/transfer/TransferCityProvince";
import areaManage from "../components/page/dataDictionary/areaManage";
import industryManage from "../components/page/dataDictionary/industryManage.vue";
import entBase from "../components/page/ReportAndRegister/EntBase";
import homePage from "../components/page/home/HomePage";
import administrativeDisposition from '../components/page/administrativeDisposition/administrativeDisposition.vue'
import homeAlarmList from "../components/page/home/HomeAlarmList";

/************************************ lx end ***************************************/

/************************************ cxf start ***************************************/
import qyStatisticalAnalysis from '../components/page/statisticalAnalysis/qyStatisticalAnalysis'
import wfStatisticalAnalysis from '../components/page/statisticalAnalysis/wfStatisticalAnalysis'
import lastYearReview from '../components/page/ReportAndRegister/lastYearReview'
import transferPlanLiveMap from '../components/page/transferPlanLive/transferPlanLiveMap'
import transferPlanLiveMap1 from '../components/page/transferPlanLive/transferPlanLiveMap1'
import transferPlanLiveList from '../components/page/transferPlanLive/transferPlanLiveList'
import transferPlanLiveEarlyWarning from '../components/page/transferPlanLive/transferPlanLiveEarlyWarning'
import wasteProductionMonitor from '../components/page/standingBook/wasteProductionMonitor'
import monitorPoints from '../components/page/standingBook/monitorPoints'
import enterpriseMonitor1 from '../components/page/standingBook/enterpriseMonitor1'
import informationTable from '../components/page/information/informationTable'
import editor1 from '../components/page/information/editorHtml1'
import transferPlanLiveMap2 from '../components/page/transferPlanLive/transferPlanLiveMap2'

/************************************ cxf end ***************************************/

/************************************ gjx start ***************************************/
import wfMap from '../components/page/realTime/wfMap'
import wfMapBak from '../components/page/realTime/wfMapBak'
import entScreen from '../components/page/realTime/entScreen'
import entEarlyWarn from '../components/page/realTime/entEarlyWarn'
import storageFacilityMonitoring from '../components/page/realTime/storageFacilityMonitoring'
import entMonthReport from '../components/page/realTime/entMonthReport'
import entYearReport from '../components/page/realTime/entYearReport'
import entManagementPlanReport from '../components/page/realTime/entManagementPlanReport'
import faceTest from '../components/page/realTime/faceTest'
import beidouTest from '../components/page/realTime/beidouTest'
import transferRealTimeMonitor from '../components/page/transferPlanLive/transferRealTimeMonitor'
import transferRealTimeMonitorShow from '../components/page/transferPlanLive/transferRealTimeMonitorShow'
import transferEarlyWarning from '../components/page/transferPlanLive/transferEarlyWarning'
import fenceSet from '../components/page/transferPlanLive/fenceSet'
/************************************ gjx end ***************************************/

/************************************ gjx end ***************************************/

/************************************ sy start ***************************************/
import hazardousReductionPlan from "../components/page/ReportAndRegister/hazardousReductionPlan";
import hazardousProductInfo from "../components/page/ReportAndRegister/hazardousProductInfo";
import productInfo from "../components/page/ReportAndRegister/productInfo";
import RegisterHomeList from "../components/page/ReportAndRegister/RegisterHomeList";
import RegisterHome from "../components/page/ReportAndRegister/RegisterHome";
import transterPlan from "../components/page/ReportAndRegister/transterPlan";
import ToUseSelf from "../components/page/ReportAndRegister/ToUseSelf";
import otherUsed from "../components/page/ReportAndRegister/otherUsed";
import environmental from "../components/page/ReportAndRegister/environmental";
import entScreenInfo from "../components/page/realTime/entScreenInfo";
/************************************ sy end ***************************************/


/************************************ zh start ***************************************/
import WasteProductionList from "../components/page/statisticalAnalysis/WasteProductionList";
import YearWasteProductionList from "../components/page/statisticalAnalysis/YearWasteProductionList";
import permitPageList from "../components/page/permit/PageList";
import entRecord from "../components/page/permit/entRecord";
import riskAnalysis from '../components/page/enterpriseWholeProcessRiskAnalysis/index'
import riskAnalysisDetail from '../components/page/enterpriseWholeProcessRiskAnalysis/riskAnalysisDetail'
/************************************ zh end ***************************************/

/************************************ zh start ***************************************/
import solidWasteYearReport from '../components/page/realTime/solidWasteYearReport' // ????????????
import SolidWasteYearReportSee from '../components/page/realTime/solidWasteYearReportSee' // ????????????
import solidWasteQuarterReport from '../components/page/realTime/solidWasteQuarterReport' // ????????????
/************************************ zh end ***************************************/

// ????????????????????????
import gfentStandBook from '../components/page/SolidWasteControl/gfentStandBook'
import gfentMonthReport from '../components/page/SolidWasteControl/gfentMonthReport'
import gfentYearReport from '../components/page/SolidWasteControl/gfentYearReport'
import gfWasteEnterprise from '../components/page/SolidWasteControl/gfWasteEnterprise'

// ???????????????????????????
import jdentStandBook from '../components/page/SupervisionOfMotor/jdentStandBook'
import jdentMonthReport from '../components/page/SupervisionOfMotor/jdentMonthReport'
import jdentYearReport from '../components/page/SupervisionOfMotor/jdentYearReport'

// ??????????????????
import ysenterpriseManagement from '../components/page/SupervisionOfTransport/ysenterpriseManagement'



import enterpriseMonitor from "../components/page/standingBook/newEnterpriseMonitor";
import productionBook from "../components/page/standingBook/productionBook";

// ????????????
import jobList from "../components/page/job/jobList"
import jobRecord from "../components/page/job/jobRecord"

// ????????????
import operlogList from "../components/page/log/operlogList"

// ??????????????????
import caseAssigned from './../components/page/riskCaseManagement/caseAssigned.vue'
// ????????????
import dataList from './../components/page/dataDictionary/dataList'
// ??????????????????
import entSublassList from './../components/page/entSublass/entSublassList'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/loginByToken',
            name: 'loginByToken',
            component: loginByToken
        },
        {
            path: '/',
            name: 'LoginHtml',
            component: LoginHtml
        },
        {
            path: '/amfHomeHtml',
            name: 'amfHomeHtml',
            component: amfHomeHtml,
            redirect: '/homePage',
            children: [
                /************************************ zys start ***************************************/
                {
                    path: '/menu',
                    name: 'menu',
                    meta: {
                        // auth: true //??????????????????????????????
                    },
                    component: menu
                },
                {
                    path: '/roleList',
                    name: 'roleList',
                    meta: {
                        // auth: true //??????????????????????????????
                    },
                    component: roleList
                },
                {
                    path: '/userList',
                    name: 'userList',
                    meta: {
                        // auth: true //??????????????????????????????
                    },
                    component: userList
                },
                {
                    path: '/videoMonitor',
                    name: 'videoMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: videoMonitor
                },
                {
                    path: '/provincialFiveLinked',
                    name: 'provincialFiveLinked',
                    meta: {
                        keepAlive: true,
                        isUseCache: false,
                        auth: true //??????????????????????????????
                    },
                    component: provincialFiveLinked
                },
                {
                    path: '/fiveLinkedInfo',
                    name: 'fiveLinkedInfo',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: fiveLinkedInfo
                },
                {
                    path: '/cityFiveLinkedList',
                    name: 'cityFiveLinkedList',
                    meta: {
                        keepAlive: true,
                        isUseCache: false,
                        auth: true //??????????????????????????????
                    },
                    component: cityFiveLinkedList
                },
                {
                    path: '/medicalTransfer',
                    name: 'medicalTransfer',
                    meta: {
                        keepAlive: true,
                        isUseCache: false,
                        auth: true //??????????????????????????????
                    },
                    component: medicalTransfer
                },
                {
                    path: '/newEntBase',
                    name: 'newEntBase',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: newEntBase
                },
                {
                    path: '/entManagementMonthReport',
                    name: 'entManagementMonthReport',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: entManagementMonthReport
                },
                {
                    path: '/entManagementYearReport',
                    name: 'entManagementYearReport',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: entManagementYearReport
                },
                /************************************ zys end ***************************************/

                /************************************ zxl start ***************************************/
                {
                    path: '/collectVideoMonitor',
                    name: 'collectVideoMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: collectVideoMonitor
                },
                {
                    path: '/managementVideoMonitor',
                    name: 'managementVideoMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: managementVideoMonitor
                },
                {
                    path: '/wasteVideoMonitor',
                    name: 'wasteVideoMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: wasteVideoMonitor
                },

                {
                    path: '/collectEnterpriseMonitor',
                    name: 'collectEnterpriseMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: collectEnterpriseMonitor
                },
                {
                    path: '/managermentEnterpriseMonitor',
                    name: 'managermentEnterpriseMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: managermentEnterpriseMonitor
                },

                {
                    path: '/wasteEnterpriseMonitor',
                    name: 'wasteEnterpriseMonitor',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                    },
                    component: wasteEnterpriseMonitor
                },
                //??????????????????>????????????
                {
                    path: '/gfentStandBook',
                    name: 'gfentStandBook',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: gfentStandBook
                },
                //??????????????????>????????????
                {
                    path: '/gfentMonthReport',
                    name: 'gfentMonthReport',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: gfentMonthReport
                },
                //??????????????????>????????????
                {
                    path: '/gfentYearReport',
                    name: 'gfentYearReport',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: gfentYearReport
                },
                //??????????????????>????????????
                {
                    path: '/gfWasteEnterprise',
                    name: 'gfWasteEnterprise',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: gfWasteEnterprise
                },
                //???????????????????????????>????????????
                {
                    path: '/jdentStandBook',
                    name: 'jdentStandBook',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: jdentStandBook
                },
                //???????????????????????????>????????????
                {
                    path: '/jdentMonthReport',
                    name: 'jdentMonthReport',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: jdentMonthReport
                },
                //??????????????????>????????????
                {
                    path: '/jdentYearReport',
                    name: 'jdentYearReport',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: jdentYearReport
                },
                //??????????????????>????????????
                {
                    path: '/ysenterpriseManagement',
                    name: 'ysenterpriseManagement',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: ysenterpriseManagement
                },
                {
                    path: '/medicalEnterpriseMonitor',
                    name: 'medicalEnterpriseMonitor',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: medicalEnterpriseMonitor
                },
                {
                    path: '/collectProductionBook',
                    name: 'collectProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: collectProductionBook
                },
                {
                    path: '/wasteProductionBook',
                    name: 'wasteProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: wasteProductionBook
                },
                {
                    path: '/medicalProductionBook',
                    name: 'medicalProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: medicalProductionBook
                },
                {
                    path: '/managementProductionBook',
                    name: 'managementProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: managementProductionBook
                },
                {
                    path: '/collectStorageFacilityMonitorin',
                    name: 'collectStorageFacilityMonitorin',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: collectStorageFacilityMonitorin
                },
                {
                    path: '/managerStorageFacilityMonitoring',
                    name: 'managerStorageFacilityMonitoring',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: managerStorageFacilityMonitoring
                },
                {
                    path: '/wasteStorageFacilityMonitoring',
                    name: 'wasteStorageFacilityMonitoring',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: wasteStorageFacilityMonitoring
                },
                {
                    path: '/enterpriseManagement',
                    name: 'enterpriseManagement',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: enterpriseManagement
                },
                {
                    path: '/wxenterpriseManagement',
                    name: 'wxenterpriseManagement',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: wxenterpriseManagement
                },
                //??????????????????
                {
                    path: '/wasteproDuctionManagement',
                    name: 'wasteproDuctionManagement',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: wasteproDuctionManagement
                },
                //??????????????????
                {
                    path: '/businessDuctionManagement',
                    name: 'businessDuctionManagement',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: businessDuctionManagement
                },
                {
                    path: '/enterpriseProductionBookgF',
                    name: 'enterpriseProductionBookgF',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                    },
                    component: enterpriseProductionBookgF
                },
                {
                    path: '/ylenterpriseManagement',
                    name: 'ylenterpriseManagement',
                    meta: {
                        keepAlive: true,
                        isUseCache: false
                            // auth: true//??????????????????????????????
                    },
                    component: ylenterpriseManagement
                },
                {
                    path: '/enterprisesInfo',
                    name: 'enterprisesInfo',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: enterprisesInfo
                },
                {
                    path: '/collectEnterpriseProductionBook',
                    name: 'collectEnterpriseProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: collectEnterpriseProductionBook
                },
                {
                    path: '/enterpriseProductionBook',
                    name: 'enterpriseProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: enterpriseProductionBook
                },
                {
                    path: '/managementEnterpriseProductionBook',
                    name: 'managementEnterpriseProductionBook',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: managementEnterpriseProductionBook
                },
                {
                    path: '/smspush',
                    name: 'smspush',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: smspush
                },



                /************************************ zxl end ***************************************/


                /************************************ lx start ***************************************/
                {
                    path: '/transferCity',
                    name: 'transferCity',
                    meta: {

                        auth: true //??????????????????????????????
                    },
                    component: transferCity
                },
                {
                    path: '/transferCity2',
                    name: 'transferCity2',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: transferCity2
                },
                {
                    path: '/transferCityProvince',
                    name: 'transferCityProvince',
                    meta: {

                        auth: true //??????????????????????????????
                    },
                    component: transferCityProvince
                },
                {
                    path: '/areaManage',
                    name: 'areaManage',
                    meta: {

                    },
                    component: areaManage
                },
                {
                    path: '/industryManage',
                    name: 'industryManage',
                    meta: {

                    },
                    component: industryManage
                },
                {
                    path: '/dataList',
                    name: 'dataList',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: dataList
                },
                {
                    path: '/homePage',
                    name: 'homePage',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: homePage
                },
                {
                    path: '/administrativeDisposition',
                    name: 'administrativeDisposition',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: administrativeDisposition
                },
                {
                    path: '/homeAlarmList',
                    name: 'homeAlarmList',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: homeAlarmList
                },


                /************************************ lx end ***************************************/
                //zh
                {
                    path: '/wasteProductionList',
                    name: 'WasteProductionList',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: WasteProductionList
                },
                {
                    path: '/YearWasteProductionList',
                    name: 'YearWasteProductionList',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: YearWasteProductionList
                },
                /************************************ cxf start ***************************************/

                {
                    path: '/qyStatisticalAnalysis',
                    name: 'qyStatisticalAnalysis',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: qyStatisticalAnalysis
                }, {
                    path: '/editor1',
                    name: 'editor1',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: editor1
                },

                {
                    path: '/informationTable',
                    name: 'informationTable',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: informationTable
                },
                {
                    path: '/wfStatisticalAnalysis',
                    name: 'wfStatisticalAnalysis',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: wfStatisticalAnalysis
                },
                {
                    path: '/transferPlanLiveMap',
                    name: 'transferPlanLiveMap',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: transferPlanLiveMap
                },
                {
                    path: '/transferPlanLiveMap1',
                    name: 'transferPlanLiveMap1',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: transferPlanLiveMap1
                },
                {
                    path: '/transferPlanLiveList',
                    name: 'transferPlanLiveList',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: transferPlanLiveList
                },
                {
                    path: '/wasteProductionMonitor',
                    name: 'wasteProductionMonitor',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: wasteProductionMonitor
                }, {
                    path: '/monitorPoints',
                    name: 'monitorPoints',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: monitorPoints
                }, {
                    path: '/transferPlanLiveEarlyWarning',
                    name: 'transferPlanLiveEarlyWarning',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: transferPlanLiveEarlyWarning
                }, {
                    path: '/enterpriseMonitor1',
                    name: 'enterpriseMonitor1',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: enterpriseMonitor1
                }, {
                    path: '/transferPlanLiveMap2',
                    name: 'transferPlanLiveMap2',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: transferPlanLiveMap2
                },
                /************************************ cxf end ***************************************/

                /************************************ gjx start ***************************************/

                {
                    path: '/wfMap',
                    name: 'wfMap',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: wfMap
                },
                {
                    path: '/wfMapBak',
                    name: 'wfMapBak',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: wfMapBak
                },
                {
                    path: '/entScreen',
                    name: 'entScreen',
                    meta: {
                        keepAlive: true,
                        isUseCache: false,
                        auth: true //??????????????????????????????
                    },
                    component: entScreen
                },
                {
                    path: '/entEarlyWarn',
                    name: 'entEarlyWarn',
                    meta: {

                        auth: true //??????????????????????????????
                    },
                    component: entEarlyWarn
                },
                {
                    path: '/storageFacilityMonitoring',
                    name: 'storageFacilityMonitoring',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: storageFacilityMonitoring
                },
                {
                    path: '/entMonthReport',
                    name: 'entMonthReport',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: entMonthReport
                },
                {
                    path: '/entYearReport',
                    name: 'entYearReport',
                    meta: {

                        auth: true //??????????????????????????????
                    },
                    component: entYearReport
                },
                {
                    path: '/solidWasteYearReport',
                    name: 'solidWasteYearReport',
                    meta: {
                        auth: true
                    },
                    component: solidWasteYearReport
                },
                //SolidWasteYearReportSee
                {
                    path: '/solidWasteYearReportSee',
                    name: 'solidWasteYearReportSee',
                    meta: {
                        auth: true
                    },
                    component: SolidWasteYearReportSee
                },
                {
                    path: '/solidWasteQuarterReport',
                    name: 'solidWasteQuarterReport',
                    meta: {
                        auth: true
                    },
                    component: solidWasteQuarterReport
                },
                {
                    path: '/faceTest',
                    name: 'faceTest',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: faceTest
                },
                {
                    path: '/beidouTest',
                    name: 'beidouTest',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: beidouTest
                },
                {
                    path: '/transferRealTimeMonitor',
                    name: 'transferRealTimeMonitor',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: transferRealTimeMonitor
                }, {
                    path: '/transferRealTimeMonitorShow',
                    name: 'transferRealTimeMonitorShow',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: transferRealTimeMonitorShow
                },
                {

                    path: '/transferEarlyWarning',
                    name: 'transferEarlyWarning',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: transferEarlyWarning
                }, {
                    path: '/entManagementPlanReport',
                    name: 'entManagementPlanReport',
                    meta: {

                        // auth: true//??????????????????????????????
                    },
                    component: entManagementPlanReport
                }, {
                    path: '/fenceSet',
                    name: 'fenceSet',
                    meta: {
                        // auth: true//??????????????????????????????
                    },
                    component: fenceSet
                },
                /************************************ gjx end ***************************************/

                /************************************ sy start ***************************************/

                {
                    path: '/RegisterHomeList',
                    name: 'RegisterHomeList',
                    meta: {
                        keepAlive: true,
                        isUseCache: false,
                        auth: true //??????????????????????????????
                    },
                    component: RegisterHomeList
                },

                {
                    path: '/entScreenInfo',
                    name: 'entScreenInfo',
                    meta: {
                        /*  auth: true//??????????????????????????????*/
                    },
                    component: entScreenInfo
                },
                {
                    path: '/caseAssigned',
                    name: 'caseAssigned',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: caseAssigned
                },
                {
                    path: '/RegisterHome',
                    name: 'RegisterHome',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: RegisterHome,
                    children: [{
                            path: '/entBase',
                            name: 'entBase',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: entBase
                        },
                        {
                            path: '/transterPlan',
                            name: 'transterPlan',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: transterPlan
                        },

                        {
                            path: '/ToUseSelf',
                            name: 'ToUseSelf',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: ToUseSelf
                        },

                        {
                            path: '/otherUsed',
                            name: 'otherUsed',
                            meta: {
                                //auth: true//??????????????????????????????
                            },
                            component: otherUsed
                        },

                        {
                            path: '/environmental',
                            name: 'environmental',
                            meta: {
                                //auth: true//??????????????????????????????
                            },
                            component: environmental
                        },
                        {
                            path: '/lastYearReview',
                            name: 'lastYearReview',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: lastYearReview
                        },
                        {
                            path: '/hazardousReductionPlan',
                            name: 'hazardousReductionPlan',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: hazardousReductionPlan
                        },
                        {
                            path: '/hazardousProductInfo',
                            name: 'hazardousProductInfo',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: hazardousProductInfo
                        },

                        {
                            path: '/productInfo',
                            name: 'productInfo',
                            meta: {
                                auth: true //??????????????????????????????
                            },
                            component: productInfo
                        },
                    ]
                },



                /************************************ sy end ***************************************/
                {
                    path: '/enterpriseMonitor',
                    name: 'enterpriseMonitor',
                    meta: {
                        //auth: true//??????????????????????????????
                    },
                    component: enterpriseMonitor
                },
                {
                    path: '/productionBook',
                    name: 'productionBook',
                    meta: {
                        //auth: true//??????????????????????????????
                    },
                    component: productionBook
                },
                {
                    path: '/permitPageList',
                    name: 'permitPageList',
                    meta: {

                        auth: true //??????????????????????????????
                    },
                    component: permitPageList
                },
                {
                    path: '/entRecord',
                    name: 'entRecord',
                    meta: {

                        auth: true //??????????????????????????????
                    },
                    component: entRecord
                },
                {
                    path: '/riskAnalysis',
                    name: 'riskAnalysis',
                    meta: {
                        keepAlive: true,
                        isUseCache: false,
                        auth: true //??????????????????????????????
                    },
                    component: riskAnalysis
                },
                {
                    path: '/riskAnalysisDetail',
                    name: 'riskAnalysisDetail',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: riskAnalysisDetail
                },
                {
                    path: '/jobList',
                    name: 'jobList',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: jobList
                },
                {
                    path: '/jobRecord',
                    name: 'jobRecord',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: jobRecord
                },
                {
                    path: '/operlogList',
                    name: 'operlogList',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: operlogList
                },
                {
                    path: '/entSublass',
                    name: 'entSublass',
                    meta: {
                        auth: true //??????????????????????????????
                    },
                    component: entSublassList
                },
            ]
        }
    ]

})
