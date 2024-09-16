import React from "react" 
import { Page, Text, View, Document, Image, StyleSheet } from "@react-pdf/renderer" 

const styles = StyleSheet.create({
  productItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 7,
    borderBottom: "1px solid #2b2a2a",
    borderLeft: "1px solid #2b2a2a",
    borderRight: "1px solid #2b2a2a",
  },
  lastProductItem: {
    borderBottomLeftRadius: 10,
  },
}) 

function MakePDFOrderDetail({ order, logoBase64, client, office, tasaBCV }) {

  return (
    <Document>
      <Page style={{
        padding: "20px",
        color: "#141414",
      }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "10px",
              width: "60%",
            }}
          >
            <Image style={{ width: "250px", height: "auto" }} src={logoBase64} />
            <Text
              style={{
                fontSize: "12px",
              }}>
              {office.address}
            </Text>
            <Text
              style={{
                fontSize: "12px"
              }}>
              Fijo: {office.phone}
            </Text>
            <Text
              style={{
                fontSize: "12px"
              }}>
              Fecha: {order.date}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-center",
              alignItems: "flex-end",
              gap: "10px",
              width: "40%",
              marginTop: "-30px",
            }}
          >
            <Text
              style={{
                fontSize: "26px",
              }}>
              Orden #: {order.numOrder}
            </Text>
            <Text
              style={{
                fontSize: "12px"
              }}>
              Detalle Pedido
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: "12px",
              }}>
              Dirección del cliente:
            </Text>
            <Text
              style={{
                fontSize: "14px",
              }}>
              {client.address}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "10px"
            }}
          >
            <Text
              style={{
                fontSize: "14px"
              }}>
              Tasa BCV: {tasaBCV}bs
            </Text>
            <Text
              style={{
                fontSize: "14px"
              }}>
              Cliente: {client.name} {client.lastName}
            </Text>
            <Text
              style={{
                fontSize: "14px"
              }}>
              Monto: ${order.total}
            </Text>
          </View>
        </View>

        <View style={{
          width: "100%",
          borderTop: "1px solid #2b2a2a",
          borderTopRightRadius: "10px",
          borderTopLeftRadius: "10px",
        }}>
          <View style={{
            backgroundColor: "#003f82",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            color: "white",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}>
            <Text style={{
              fontSize: "13px",
              fontWeight: "bold",
              width: "5%"
            }}>
              #
            </Text>
            <Text style={{
              fontSize: "13px",
              fontWeight: "bold",
              width: "50%"
            }}>
              Producto
            </Text>
            <Text style={{
              fontSize: "13px",
              fontWeight: "bold",
              width: "10%",
              textAlign: "center",
            }}>
              Cantidad
            </Text>
            <Text style={{
              fontSize: "13px",
              fontWeight: "bold",
              width: "15%",
              textAlign: "center",
            }}>
              Precio
            </Text>
            <Text style={{
              fontSize: "13px",
              fontWeight: "bold",
              width: "20%",
              textAlign: "center",
            }}>
              Subtotal
            </Text>
          </View>
          {order.products.map((product, index) => (
            <View key={product._id} style={{
              ...styles.productItem,
              ...(index === order.products.length - 1 && styles.lastProductItem),
            }}
            >
              <Text style={{
                fontSize: "12px",
                width: "5%"
              }}>
                {index + 1}
              </Text>
              <Text style={{
                fontSize: "12px",
                width: "50%",
                color: "#141414",
                fontWeight: "bold"
              }}>
                {product.name}
              </Text>
              <Text style={{
                fontSize: "10px",
                width: "10%",
                color: "#2b2a2a",
                textAlign: "center",
              }}>
                {product.quantity}
              </Text>
              <Text style={{
                fontSize: "10px",
                width: "15%",
                color: "#2b2a2a",
                textAlign: "center",
              }}>
                ${product.price} ({product.price * tasaBCV}bs)
              </Text>
              <Text style={{
                fontSize: "10px",
                width: "20%",
                color: "#26658c",
                textAlign: "center",
              }}>
                ${product.price * product.quantity} ({(product.price * product.quantity) * tasaBCV}bs)
              </Text>
            </View>
          ))}

          <View style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end"
          }}>
            <Text style={{
              fontSize: "10px",
              padding: "6px",
              width: "30%",
              textAlign: "right",
              border: "1px solid #2b2a2a",
              borderTop: "none",
            }}>
              Subtotal: ${order.total} ({order.total * tasaBCV}bs)
            </Text>
            <Text style={{
              fontSize: "10px",
              padding: "6px",
              width: "30%",
              textAlign: "right",
              border: "1px solid #2b2a2a",
              borderTop: "none",
              borderBottomRightRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}>
              Total: ${order.total} ({order.total * tasaBCV}bs)
            </Text>
          </View>
        </View>

        <View>
          <Text style={{
            fontSize: "12px",
            marginBottom: "30px"
          }}>
            Comentarios:
          </Text>
        </View>

        <View style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          width: "100%",
          textAlign: "center",
        }}>
          <View style={{
            borderTop: "1px solid #2b2a2a",
            paddingTop: "10px",
          }}>
            <View style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: "10px"
            }}>
              <Text style={{ fontSize: "12px" }}>Elaborado por:</Text>
              <Image style={{ width: "100px", height: "auto" }} src={logoBase64} />
            </View>
          </View>
        </View>

      </Page>
    </Document>
  ) 
} 

export default MakePDFOrderDetail 
