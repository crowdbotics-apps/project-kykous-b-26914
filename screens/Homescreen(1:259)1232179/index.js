import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_1_364} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82d6/19b4/75576227102206f77c322f12bf6d1e15"
        }}
        style={styles.ImageBackground_3_586}
      />
      <View style={styles.View_1_260} />
      <View style={styles.View_1_320}>
        <View style={styles.View_1_321}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80d7/f966/39f34899efa172e525a48dfd135bb93e"
            }}
            style={styles.ImageBackground_1_322}
          />
        </View>
        <View style={styles.View_1_324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd71/44bb/cccc06ae9b3368b94aeb7cf53a06f593"
            }}
            style={styles.ImageBackground_1_325}
          />
        </View>
        <View style={styles.View_1_327}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c17/6ea2/c46d64974893117b3823b59fb68007e2"
            }}
            style={styles.ImageBackground_1_328}
          />
        </View>
        <View style={styles.View_1_331}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d6/7e85/55455e94b23306c4c9cea9a43c9bf577"
            }}
            style={styles.ImageBackground_1_332}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5370/78a5/4d6ca2dc83ef1837f2d24454b8106835"
            }}
            style={styles.ImageBackground_1_330}
          />
        </View>
      </View>
      <View style={styles.View_41_3}>
        <View style={styles.View_3_705}>
          <View style={styles.View_3_704} />
          <View style={styles.View_3_692}>
            <View style={styles.View_3_693} />
            <View style={styles.View_3_709}>
              <View style={styles.View_3_708} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af92/8fc1/aae60924b272ffad43e80f0a8ea4a4c9"
                }}
                style={styles.ImageBackground_3_706}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6b/1a19/b464fe932b88c57e359f4e8665fa6464"
              }}
              style={styles.ImageBackground_3_694}
            />
            <View style={styles.View_3_697}>
              <Text style={styles.Text_3_697}>Η. ΔΙΟΙΚΗΣΗ</Text>
            </View>
            <View style={styles.View_3_698}>
              <Text style={styles.Text_3_698}>
                Σχολική πλατφόρμα για τους μαθητές
              </Text>
            </View>
            <View style={styles.View_3_699}>
              <Text style={styles.Text_3_699}>Είσοδος</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_3_690}>
        <Text style={styles.Text_3_690}>Σχολείο</Text>
      </View>
      <View style={styles.View_41_2}>
        <View style={styles.View_3_383}>
          <Text style={styles.Text_3_383}>Λυκείο Κύκκου Β’</Text>
        </View>
        <View style={styles.View_1_365}>
          <Text style={styles.Text_1_365}>ΚΑΛΩΣ ΗΡΘΑΤΕ!</Text>
        </View>
        <View style={styles.View_41_1}>
          <View style={styles.View_3_585}>
            <View style={styles.View_3_384} />
            <View style={styles.View_3_545}>
              <View style={styles.View_3_543} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7576/81cc/ada0a9132d2b84d3e64cffc8365be382"
                }}
                style={styles.ImageBackground_3_583}
              />
              <View style={styles.View_3_564}>
                <View style={styles.View_3_565}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d757/8dd6/7d2b235b95821260a11e7e3bb566cab4"
                    }}
                    style={styles.ImageBackground_3_566}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_3_536}>
              <Text style={styles.Text_3_536}>Απουσίες</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6b/1a19/b464fe932b88c57e359f4e8665fa6464"
              }}
              style={styles.ImageBackground_3_529}
            />
          </View>
          <View style={styles.View_3_584}>
            <View style={styles.View_1_354} />
            <View style={styles.View_3_539}>
              <View style={styles.View_3_538} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/172e/7a48/9ebce528596759d67808c5fe009b6588"
                }}
                style={styles.ImageBackground_3_541}
              />
            </View>
            <View style={styles.View_3_534}>
              <Text style={styles.Text_3_534}>Βαθμοί</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6b/1a19/b464fe932b88c57e359f4e8665fa6464"
              }}
              style={styles.ImageBackground_3_526}
            />
            <View style={styles.View_3_546}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2494/0b3a/4db80e57170a8d9c41722080a404faf6"
                }}
                style={styles.ImageBackground_3_547}
              />
            </View>
          </View>
          <View style={styles.View_2_12}>
            <View style={styles.View_2_13} />
            <View style={styles.View_2_14}>
              <View style={styles.View_2_15} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/172e/7a48/9ebce528596759d67808c5fe009b6588"
                }}
                style={styles.ImageBackground_2_16}
              />
            </View>
            <View style={styles.View_2_17}>
              <Text style={styles.Text_2_17}>E-CARD</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6b/1a19/b464fe932b88c57e359f4e8665fa6464"
              }}
              style={styles.ImageBackground_2_18}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e2/da63/aeb19e3587d142e5a0690696540c72c8"
              }}
              style={styles.ImageBackground_2_4}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_3_587}>
        <View style={styles.View_3_588}>
          <View style={styles.View_3_589}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91fb/9eff/1b7cde19e013d93099b95858669bdb67"
              }}
              style={styles.ImageBackground_3_590}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc06/f00e/148d36c023ed42c57ef6695b446dea75"
              }}
              style={styles.ImageBackground_3_592}
            />
          </View>
          <View style={styles.View_3_594}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b92e/660d/0b534770ba3296345628aec4be41a92d"
              }}
              style={styles.ImageBackground_3_595}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5891/1e67/52319ee9af22fec29fb44e8950d4d17b"
              }}
              style={styles.ImageBackground_3_596}
            />
          </View>
          <View style={styles.View_3_600}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e88/ac03/3ba2a14f6aac9986896e3c1665e1b509"
              }}
              style={styles.ImageBackground_3_601}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13e3/95cb/701f9c1211dd0fb315e006572ad6236f"
              }}
              style={styles.ImageBackground_3_602}
            />
          </View>
          <View style={styles.View_3_606}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c3a/8a83/560722cf0d72ed202d976cc4fe129224"
              }}
              style={styles.ImageBackground_3_607}
            />
          </View>
          <View style={styles.View_3_616}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d63/e60b/b2c05938a758cb92246ff50ae12bb68f"
              }}
              style={styles.ImageBackground_3_617}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28c5/18c6/905ed669c62d5d74da2d15318047d079"
            }}
            style={styles.ImageBackground_3_624}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f395/9a2e/ed73f112d7c9ecfcf64ef3d76904534f"
            }}
            style={styles.ImageBackground_3_627}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3379/56c7/8fb2def91717d3e0ef132e6eb25cc052"
            }}
            style={styles.ImageBackground_3_630}
          />
          <View style={styles.View_3_633}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9412/73ef/5ec7c2dc4356404a71066ef923f5fbf6"
              }}
              style={styles.ImageBackground_3_635}
            />
          </View>
        </View>
        <View style={styles.View_3_639}>
          <View style={styles.View_3_640}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3948/b7e4/f51e8e761c758a662319041426b70285"
              }}
              style={styles.ImageBackground_3_641}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea61/1d73/d76efb7088b3270f7f653c4b03682c23"
              }}
              style={styles.ImageBackground_3_643}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7fa/f6ed/8d49ebf656924ef9feb80498c71c155d"
              }}
              style={styles.ImageBackground_3_645}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2eaf/374c/78a24050e36a48456e85afd67a29cc8c"
              }}
              style={styles.ImageBackground_3_646}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4f7/8fbb/c2a9d057c5ce6988bc4b7e3f0ca8d0f9"
              }}
              style={styles.ImageBackground_3_647}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dbb/f878/cb224e4a92288c6723bc2fc7317ac96a"
              }}
              style={styles.ImageBackground_3_648}
            />
          </View>
          <View style={styles.View_3_649}>
            <View style={styles.View_3_650}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4eb/41dd/5876517fd7cf2770c22894c90f3ec0fc"
                }}
                style={styles.ImageBackground_3_651}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e21c/8134/e471765721b797643bcf2e10df6f1985"
                }}
                style={styles.ImageBackground_3_653}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7705/f8ab/d73b3c994b3027f47850672d52e054cc"
                }}
                style={styles.ImageBackground_3_654}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fee/4f2d/92e97781906c4c926b2516f874ff72a3"
                }}
                style={styles.ImageBackground_3_655}
              />
            </View>
            <View style={styles.View_3_656}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df32/21bf/16c3a79f24b6e08f1910a7564ca847d0"
                }}
                style={styles.ImageBackground_3_657}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4598/04fd/fc8944aaeaed8d7e719b2aef987a8a8b"
                }}
                style={styles.ImageBackground_3_659}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe68/8efe/646301b88bbec46a00ad58397ffc6c13"
                }}
                style={styles.ImageBackground_3_660}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b327/f544/a6e77ff9d493d3270e4b9546a2aa6ee1"
                }}
                style={styles.ImageBackground_3_661}
              />
            </View>
            <View style={styles.View_3_662}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4eb/41dd/5876517fd7cf2770c22894c90f3ec0fc"
                }}
                style={styles.ImageBackground_3_663}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4a2/a6f5/a5d5ffacad54857637af9c67ce7367bf"
                }}
                style={styles.ImageBackground_3_665}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c774/24ee/6d0bda274b2964c51eba7659d6aaead1"
                }}
                style={styles.ImageBackground_3_666}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4dd/54d0/22f3eb01a1d4861372e91370d6579214"
                }}
                style={styles.ImageBackground_3_667}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_41_0}>
        <View style={styles.View_3_712} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a585/10e7/9fbd265d4a9b475b77b0cc4cba53eab1"
          }}
          style={styles.ImageBackground_3_713}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_1_364: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("49.04371584699454%"),
    minHeight: hp("49.04371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 102, 79, 1)"
  },
  ImageBackground_3_586: {
    width: wp("117.277490234375%"),
    height: hp("40.76591450008538%"),
    top: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%")
  },
  View_1_260: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.80327868852459%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_1_320: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.8445184426229515%"),
    minHeight: hp("7.8445184426229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.14207650273224%")
  },
  View_1_321: {
    width: wp("25%"),
    height: hp("7.8445184426229515%"),
    minHeight: hp("7.8445184426229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_322: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.266666666666666%")
  },
  View_1_324: {
    width: wp("25%"),
    height: hp("7.8445184426229515%"),
    minHeight: hp("7.8445184426229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_325: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.199999999999996%")
  },
  View_1_327: {
    width: wp("25%"),
    height: hp("7.8445184426229515%"),
    minHeight: hp("7.8445184426229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_328: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.399999999999999%")
  },
  View_1_331: {
    width: wp("25%"),
    height: hp("7.8445184426229515%"),
    minHeight: hp("7.8445184426229515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_332: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.6%")
  },
  ImageBackground_1_330: {
    width: wp("1.0666666666666667%"),
    height: hp("0.546448087431694%"),
    top: hp("5.464480874316948%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%")
  },
  View_41_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.13114754098361%")
  },
  View_3_705: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_704: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32
  },
  View_3_692: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.284153005464475%"),
    minHeight: hp("56.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_693: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 197, 145, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_3_709: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_708: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 42, 136, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_3_706: {
    width: wp("85.06666666666666%"),
    minWidth: wp("85.06666666666666%"),
    height: hp("18.71584699453552%"),
    minHeight: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_3_694: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.868852459016395%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%")
  },
  View_3_697: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.732240437158481%")
  },
  Text_3_697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_698: {
    width: wp("57.333333333333336%"),
    minWidth: wp("57.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("6.557377049180332%")
  },
  Text_3_698: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_699: {
    width: wp("12.266666666666666%"),
    minWidth: wp("12.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("15.027322404371589%")
  },
  Text_3_699: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_690: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666667%"),
    top: hp("78.14207650273224%")
  },
  Text_3_690: {
    color: "rgba(33, 37, 35, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_2: {
    width: wp("127.46666666666667%"),
    minWidth: wp("127.46666666666667%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("49.04371584699454%")
  },
  View_3_383: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.918032786885242%")
  },
  Text_3_383: {
    color: "rgba(188, 193, 205, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_365: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_365: {
    color: "rgba(33, 37, 35, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_1: {
    width: wp("127.46666666666667%"),
    minWidth: wp("127.46666666666667%"),
    height: hp("16.530054644808743%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.699453551912562%")
  },
  View_3_585: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.99999999999999%"),
    top: hp("0.2732240437158495%")
  },
  View_3_384: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(143, 152, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_3_545: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_543: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(143, 152, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_3_583: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_564: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_3_565: {
    width: wp("6.39999491373698%"),
    height: hp("3.2786880034566575%"),
    top: hp("0.00003335254439207347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00013020833333143855%")
  },
  ImageBackground_3_566: {
    width: wp("6.39999491373698%"),
    height: hp("3.2786880034566575%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_536: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("10.79234972677596%")
  },
  Text_3_536: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.866666666666674%")
  },
  View_3_584: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158495%")
  },
  View_1_354: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 118, 72, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_3_539: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_538: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 118, 72, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_3_541: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_534: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("10.79234972677596%")
  },
  Text_3_534: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_3_526: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.133333333333333%")
  },
  View_3_546: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_547: {
    width: wp("6.4000289916992195%"),
    height: hp("2.5912623587853267%"),
    top: hp("0.34373132257513106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_12: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333335%"),
    top: hp("0%")
  },
  View_2_13: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 118, 72, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_2_14: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_15: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 118, 72, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_2_16: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_17: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666515%"),
    top: hp("10.792349726775967%")
  },
  Text_2_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_18: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.13333333333331%")
  },
  ImageBackground_2_4: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.732240437158474%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%")
  },
  View_3_587: {
    width: wp("105.67331542968749%"),
    height: hp("37.88883230073856%"),
    top: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%")
  },
  View_3_588: {
    width: wp("105.67331542968749%"),
    height: hp("34.69452571347763%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_589: {
    width: wp("38.91552734375%"),
    height: hp("21.75113698823856%"),
    top: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%")
  },
  ImageBackground_3_590: {
    width: wp("35.60797119140625%"),
    height: hp("14.994510796552147%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_592: {
    width: wp("30.953124999999996%"),
    height: hp("12.360797944616099%"),
    top: hp("9.390342170423498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.962369791666667%")
  },
  View_3_594: {
    width: wp("28.1094482421875%"),
    height: hp("13.372275347266694%"),
    top: hp("14.875568327356559%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.406640625%")
  },
  ImageBackground_3_595: {
    width: wp("28.1094482421875%"),
    height: hp("13.372275347266694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_596: {
    width: wp("19.668507893880207%"),
    height: hp("10.974231574053322%"),
    top: hp("0.6771900614754074%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.530013020833337%")
  },
  View_3_600: {
    width: wp("25.040922037760417%"),
    height: hp("9.528257026047003%"),
    top: hp("19.672131147540988%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_601: {
    width: wp("25.040922037760417%"),
    height: hp("9.528257026047003%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_602: {
    width: wp("0.9866668701171875%"),
    height: hp("0.1366120218579235%"),
    top: hp("4.473343312414617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8525390625%")
  },
  View_3_606: {
    width: wp("48.643839518229164%"),
    height: hp("27.16335442548241%"),
    top: hp("7.531171287995219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.26666666666666%")
  },
  ImageBackground_3_607: {
    width: wp("48.643839518229164%"),
    height: hp("27.16335442548241%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_616: {
    width: wp("18.88200480143229%"),
    height: hp("27.582299904745135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%")
  },
  ImageBackground_3_617: {
    width: wp("18.88200480143229%"),
    height: hp("27.582299904745135%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_624: {
    width: wp("16.13398946126302%"),
    height: hp("9.427685555213136%"),
    top: hp("22.72488953637295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.53932291666666%")
  },
  ImageBackground_3_627: {
    width: wp("17.813338216145834%"),
    height: hp("4.93815635722843%"),
    top: hp("29.20018597378757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.56666666666666%")
  },
  ImageBackground_3_630: {
    width: wp("16.533868408203126%"),
    height: hp("8.051862873014857%"),
    top: hp("8.196721311475411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%")
  },
  View_3_633: {
    width: wp("15.584381103515623%"),
    height: hp("13.540864121067067%"),
    top: hp("17.869092597336063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.23561197916667%")
  },
  ImageBackground_3_635: {
    width: wp("15.584381103515623%"),
    height: hp("13.540864121067067%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_3_639: {
    width: wp("79.80201822916668%"),
    height: hp("28.65938697356344%"),
    top: hp("9.229449496243168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.724609375%")
  },
  View_3_640: {
    width: wp("42.36272379557292%"),
    height: hp("28.65938697356344%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_641: {
    width: wp("18.876881917317707%"),
    height: hp("20.519811077847507%"),
    top: hp("0.5550530438866161%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.889778645833331%")
  },
  ImageBackground_3_643: {
    width: wp("33.3304931640625%"),
    height: hp("22.623120500741763%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.0322265625%")
  },
  ImageBackground_3_645: {
    width: wp("38.61333414713541%"),
    height: hp("19.781419097400104%"),
    top: hp("0.9271507054730215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.015364583333337123%")
  },
  ImageBackground_3_646: {
    width: wp("38.64463704427084%"),
    height: hp("19.233891221343494%"),
    top: hp("0.9282346631659841%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_647: {
    width: wp("3.786665852864583%"),
    height: hp("4.617484671170594%"),
    top: hp("22.38889600409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.428710937499993%")
  },
  ImageBackground_3_648: {
    width: wp("33.41398111979167%"),
    height: hp("1.8032761870837601%"),
    top: hp("26.85610244834358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.602018229166667%")
  },
  View_3_649: {
    width: wp("45.83999837239583%"),
    height: hp("13.797812123116248%"),
    top: hp("14.847919068049862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.96204427083334%")
  },
  View_3_650: {
    width: wp("45.813330078125%"),
    height: hp("4.590162683705815%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_651: {
    width: wp("43.7066650390625%"),
    height: hp("3.524590580841231%"),
    top: hp("0.5327735442281423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%")
  },
  ImageBackground_3_653: {
    width: wp("45.813330078125%"),
    height: hp("4.590162683705815%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_654: {
    width: wp("43.38666585286458%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.8059975879439918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3600260416666714%")
  },
  ImageBackground_3_655: {
    width: wp("3.5200032552083336%"),
    height: hp("2.267758312121115%"),
    top: hp("1.6393442622950865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.413346354166663%")
  },
  View_3_656: {
    width: wp("45.813330078125%"),
    height: hp("4.590164768239839%"),
    top: hp("4.603818466103146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_657: {
    width: wp("43.7066650390625%"),
    height: hp("3.5245926653752564%"),
    top: hp("0.5327735442281423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%")
  },
  ImageBackground_3_659: {
    width: wp("45.813330078125%"),
    height: hp("4.590164768239839%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_660: {
    width: wp("43.380000813802084%"),
    height: hp("2.9918045294089395%"),
    top: hp("0.7923563972848342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%")
  },
  ImageBackground_3_661: {
    width: wp("3.493326822916667%"),
    height: hp("2.2814203481205175%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.02669270833333%")
  },
  View_3_662: {
    width: wp("45.813334147135414%"),
    height: hp("4.5901605991717895%"),
    top: hp("9.207636932206288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.026692708333328596%")
  },
  ImageBackground_3_663: {
    width: wp("43.7066650390625%"),
    height: hp("3.5245884963072065%"),
    top: hp("0.5327735442281423%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0399739583333343%")
  },
  ImageBackground_3_665: {
    width: wp("45.813334147135414%"),
    height: hp("4.5901605991717895%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_3_666: {
    width: wp("43.38666585286458%"),
    height: hp("2.6092904512999486%"),
    top: hp("0.7923563972848342%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%")
  },
  ImageBackground_3_667: {
    width: wp("3.4933308919270836%"),
    height: hp("2.2814182635864926%"),
    top: hp("1.6256697190915332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.066666666666663%")
  },
  View_41_0: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("6.0109289617486334%")
  },
  View_3_712: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  ImageBackground_3_713: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
