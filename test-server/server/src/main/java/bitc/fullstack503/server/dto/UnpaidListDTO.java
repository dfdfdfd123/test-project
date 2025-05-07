// 미결제 리스트

package bitc.fullstack503.server.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UnpaidListDTO {
    private String branchId;
    private String branchName;
    private String partsId;
    private String partName;
    private int orderItemQuantity;
    private BigDecimal orderItemPrice;
    private Date orderDate;
    private String orderStatus;
    private String orderId;

}





