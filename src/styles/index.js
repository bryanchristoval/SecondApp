import { StyleSheet } from 'react-native'

export const colors ={ 
    black: 'black',
    white: '#FFFFFF',
    green: '#75D424',
    red: '#D44624',
    grey: '#8E8E93',
    lightGrey: '#EEEEEE',
    greyFade: '#E8E8E9'
};

export default StyleSheet.create({
    text1:{
        fontSize: 13,
        fontFamily:'ProximaNova-Regular',
        color: colors.grey
        
    },
    container:{
        paddingLeft: 20,
    },

    calcContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 1,
    },
    calcContainer2: {
        flex: 1,
        backgroundColor: colors.lightGrey,
        paddingBottom: 34,
        flexDirection:'row'
    },
    
    header:{
        marginTop: 26,
    },
    header2:{
    },


    Card1:{
        height: 80,
        width: 335,
        backgroundColor: colors.red,
        borderRadius: 4,
        borderBottomWidth: null,
        
    },
    Card2:{
        height: 80,
        width: 335,
        backgroundColor: colors.green,
        borderRadius: 4,
        borderBottomWidth: null,
        
    },
    

    viewBottom:{
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingLeft:16,
        paddingRight: 15.8,
        
    },

    currencyView:{
        flexDirection:'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },

    currencyText:{
        marginLeft: 3,
        marginRight: 3,
        color: colors.grey
    },
    cardBottom:{
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 4,

    },

    item: {
        color: colors.black,
        fontSize: 26,
    },
    
    
      row: {
        height: 200,
        flex:1
    },

    titleText:{
        fontSize: 36,
        fontFamily:'PlayfairDisplay-Black',
        paddingLeft: 20,
    },
    searchBg:{
        backgroundColor: colors.greyFade,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        marginTop: 17,
    },
    searchTextInput:{
        color: colors.grey,
        opacity: 1,
        flex:1,
        fontSize: 17,
        lineHeight: 17
    },
    iconStyle:{
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 20,
        color: colors.grey,
    },
    dateView:{
        height: 42,
        paddingTop: 15,
        paddingLeft: 20,

    },
    dateView2:{
        height: 42,
        paddingLeft: 20,

    },
    dateText:{
        fontFamily: 'ProximaNova-Regular',
        color: colors.grey,
        paddingTop: 18,
    },

    topView:{
        height: 60,
        paddingTop: 20,
        flexDirection: 'row',
    },
    bottomSwiper:{
        height: 93,
        width:93,
        alignItems: 'center'
    },

    bigCarousel1:{
        height: 270, 
        width: 335,
        backgroundColor:"#D44624",
        borderRadius: 4,
        marginRight: 15
        
    },
    bigCarousel2:{
        height: 270,
        width: 335,
        backgroundColor:"#75D424",
        borderRadius: 4,
        
    },
    cardText1:{
        color: 'white',
        fontSize: 13,
        paddingLeft: 20,
        paddingTop: 14,
        fontFamily: 'ProximaNova-Regular'
        
    },
    cardText2:{
        color:'#000000',
        paddingBottom: 6,
        fontSize: 56,
        opacity: 0.25,
        fontFamily: 'ProximaNova-Semibold'
    },
    cardText3:{
        color:'#000000',
        paddingBottom: 6,
        fontSize: 17,
        fontFamily: 'ProximaNova-Regular',
        opacity: 0.25,
        
    },
})